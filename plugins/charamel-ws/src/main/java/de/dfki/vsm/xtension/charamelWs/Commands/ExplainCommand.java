package de.dfki.vsm.xtension.charamelWs.Commands;

public class ExplainCommand extends ActionCommand {

    public ExplainCommand(int number) {
        super("humanoid/talk/explain/",
                String.format("explain%02d.glb", number));
        if (number > 4 || number < 1) {
            throw new IllegalArgumentException("The character only has five fingers on one hand");
        }
    }
}
