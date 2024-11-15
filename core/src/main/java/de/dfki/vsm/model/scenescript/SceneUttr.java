package de.dfki.vsm.model.scenescript;

//~--- non-JDK imports --------------------------------------------------------
import de.dfki.vsm.util.ios.IOSIndentWriter;
import de.dfki.vsm.util.xml.XMLParseAction;
import de.dfki.vsm.util.xml.XMLParseError;
import de.dfki.vsm.util.xml.XMLWriteError;

import org.w3c.dom.Element;

//~--- JDK imports ------------------------------------------------------------
import java.util.HashMap;
import java.util.LinkedList;

/**
 * @author Gregor Mehlmann
 */
public class SceneUttr extends ScriptEntity {

	// The Word List
	private LinkedList<UttrElement> mWordList = new LinkedList<>();

	// The Punctuation
	private String mPunct;

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public SceneUttr() {
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public SceneUttr(final int lower, final int upper, final LinkedList<UttrElement> list, final String punct) {

		// Initialize Boundary
		super(lower, upper);

		// Initialize Members
		mWordList = list;
		mPunct = punct;
	}

	    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final LinkedList<UttrElement> getCleanWordList() {
		LinkedList<UttrElement> textWords = new LinkedList<>();
		
			// TODO variables
		for (UttrElement word : mWordList) {
			if (word instanceof SceneWord) {
				textWords.add(word);
			}
		}
		
		return textWords;
	}
	
    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final LinkedList<UttrElement> getWordList() {
		return mWordList;
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final void setWordList(final LinkedList<UttrElement> list) {
		mWordList = list;
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final LinkedList<UttrElement> copyWordList() {

		// Construct A List Copy
		final LinkedList<UttrElement> copy = new LinkedList<>();

		// Copy Each Single Member
		for (final UttrElement word : mWordList) {
			copy.add(word.getCopy());
		}

		// Return The Final Clone
		return copy;
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final String getPunctuationMark() {
		return mPunct;
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final void setPunctuationMark(final String punct) {
		mPunct = punct;
	}
        
        	    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final String getCleanTextOnly() {
		StringBuilder result = new StringBuilder();

		// TODO variables
		for (UttrElement word : mWordList) {
			if (word instanceof SceneWord) {
				result.append(word.getText()).append(" ");
			}
		}
		result = new StringBuilder(result.toString().trim());

		return result.toString();
	}

	    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	public final String getCleanText() {
		StringBuilder result = new StringBuilder();

		// TODO variables
		for (UttrElement word : mWordList) {
			if (word instanceof SceneWord) {
				result.append(word.getText()).append(" ");
			}
		}
		result = new StringBuilder(result.toString().trim() + getPunctuationMark() + " ");

		result = new StringBuilder(result.toString().trim());

		return result.toString();
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	@Override
	public final String getText() {
		StringBuilder result = new StringBuilder();

        for (UttrElement uttrElement : mWordList) {
            result.append(" ").append(uttrElement.getText());
        }

		return result + mPunct;
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	@Override
	public final String getText(final HashMap<String, String> args) {
		StringBuilder result = new StringBuilder();

        for (UttrElement uttrElement : mWordList) {
            result.append(" ").append(uttrElement.getText(args));
        }

		return result + mPunct;
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	@Override
	public final void writeXML(final IOSIndentWriter stream) throws XMLWriteError {
		stream.println("<SceneUttr " + "lower=\"" + mLower + "\" " + "upper=\"" + mUpper + "\" " + "punct=\"" + mPunct
		  + "\">");
		stream.push();

		for (final UttrElement word : mWordList) {
			word.writeXML(stream);

			if (!word.equals(mWordList.getLast())) {
				stream.endl();
			}
		}

		stream.pop();
		stream.endl();
		stream.print("</SceneUttr>");
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	@Override
	public final void parseXML(final Element element) throws XMLParseError {

		// Parse The Boundary
		mLower = Integer.parseInt(element.getAttribute("lower"));
		mUpper = Integer.parseInt(element.getAttribute("upper"));

		// Parse Punctuation
		mPunct = element.getAttribute("punct");

		// Process The Child Nodes
		XMLParseAction.processChildNodes(element, new XMLParseAction() {
			@Override
			public void run(final Element element) throws XMLParseError {

				// Get The Child Tag Name
				final String name = element.getTagName();

				// Check The Child Tag Name
                switch (name) {
                    case "SceneWord": {

                        // Create A New Simple Word
                        final SceneWord word = new SceneWord();

                        // Parse The NewSimple Word
                        word.parseXML(element);

                        // Add The New Simple Word
                        mWordList.add(word);
                        break;
                    }
                    case "SceneAbbrev": {

                        // Create A New Simple Word
                        final SceneAbbrev word = new SceneAbbrev();

                        // Parse The NewSimple Word
                        word.parseXML(element);

                        // Add The New Simple Word
                        mWordList.add(word);
                        break;
                    }
                    case "SceneParam": {

                        // Create A New Simple Word
                        final SceneParam word = new SceneParam();

                        // Parse The NewSimple Word
                        word.parseXML(element);

                        // Add The New Simple Word
                        mWordList.add(word);
                        break;
                    }
                    case "ActionObject": {

                        // Create A New Simple Word
                        final ActionObject word = new ActionObject();

                        // Parse The NewSimple Word
                        word.parseXML(element);

                        // Add The New Simple Word
                        mWordList.add(word);
                        break;
                    }
                    default:

                        // Do Nothing
                        break;
                }
			}
		});
	}

    ////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	@Override
	public final SceneUttr getCopy() {
		return new SceneUttr(mLower, mUpper, copyWordList(), mPunct);
	}
}
