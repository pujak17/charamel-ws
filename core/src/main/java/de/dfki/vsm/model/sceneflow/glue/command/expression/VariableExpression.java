package de.dfki.vsm.model.sceneflow.glue.command.expression;

import de.dfki.vsm.model.sceneflow.glue.command.Expression;
import de.dfki.vsm.model.sceneflow.glue.command.expression.variable.ArrayVariable;
import de.dfki.vsm.model.sceneflow.glue.command.expression.variable.MemberVariable;
import de.dfki.vsm.model.sceneflow.glue.command.expression.variable.SimpleVariable;
import de.dfki.vsm.util.xml.XMLParseError;

import org.w3c.dom.Element;

/**
 * @author Gregor Mehlmann
 */
public abstract class VariableExpression extends Expression {

    @Override
    public abstract VariableExpression getCopy();

    public static VariableExpression parse(final Element element) throws XMLParseError {
        VariableExpression variable;
        final String tag = element.getTagName();
        switch (tag) {
            case "SimpleVariable":
                variable = new SimpleVariable();
                variable.parseXML(element);
                break;
            case "MemberVariable":
                variable = new MemberVariable();
                variable.parseXML(element);
                break;
            case "FieldVariable":
                variable = new ArrayVariable();
                variable.parseXML(element);
                break;
            default:
                variable = null;
                break;
        }
        return variable;
    }
}