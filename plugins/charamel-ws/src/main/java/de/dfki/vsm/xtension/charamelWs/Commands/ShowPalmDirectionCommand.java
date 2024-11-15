package de.dfki.vsm.xtension.charamelWs.Commands;

public class ShowPalmDirectionCommand extends ActionCommand {

    public ShowPalmDirectionCommand(Direction direction) {
        super("humanoid/presentation/location", fileName(direction));
    }

    private static String fileName(Direction direction) {
        switch (direction) {
            case RIGHT:
                return "in_the_front01.glb";
            case LEFT:
                return "in_the_front02.glb";
            default:
                throw new IllegalStateException();
        }
    }
}
