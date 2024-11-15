package de.dfki.vsm.xtension.voicerecognition.microphone;

import com.darkprograms.speech.microphone.Microphone;
import main.speechrecognition.audioproviders.Audible;
import net.sourceforge.javaflacencoder.FLACFileWriter;

/**
 * Created by alvaro on 7/6/17.
 */
public class GenericMicrophone implements Audible {
    private Microphone mic;


    @Override
    public void startListening() {
        mic = new Microphone(FLACFileWriter.FLAC);
    }


    @Override
    public void stopListening() {
        mic.close();
    }


}
