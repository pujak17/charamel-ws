package de.dfki.vsm.xtension.tricatworld;

import de.dfki.vsm.util.log.LOGConsoleLogger;

import java.io.*;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

/**
 * @author Gregor Mehlmann
 */
public class TriCatWorldHandler extends Thread {

    // The logger instance
    private final LOGConsoleLogger mLogger
            = LOGConsoleLogger.getInstance();
    // The executor instance
    private final TriCatWorldExecutor mExecutor;
    // The client socket
    private final Socket mSocket;
    // The socket streams
    private BufferedReader mInStream;
    private BufferedWriter mOutStream;
    // The termination flag
    private boolean mDone = false;

    // Create the client thread
    public TriCatWorldHandler(final Socket socket, final TriCatWorldExecutor executor) {
        // Initialize the socket
        mSocket = socket;
        // Initialize the executor
        mExecutor = executor;
    }

    // Start the client thread
    @Override
    public void start() {
        try {
            // Get the socket streams
            mInStream = new BufferedReader(
                    new InputStreamReader(
                            mSocket.getInputStream(), StandardCharsets.UTF_8));
            mOutStream = new BufferedWriter(
                    new OutputStreamWriter(
                            mSocket.getOutputStream(), StandardCharsets.UTF_8));
        } catch (final IOException exc) {
            mLogger.failure(exc.toString());
        }
        // Start the thread
        super.start();
    }

    // Abort the client thread
    public final void abort() {
        // Set the termination flag
        mDone = true;
        // Eventually close the socket
        if (mSocket != null && !mSocket.isClosed()) {
            try {
                mSocket.close();
            } catch (final IOException exc) {
                mLogger.failure(exc.toString());
            }
        }
        // Interrupt if sleeping
        interrupt();
    }

    // Receive some message
    public final String recv() {
        try {
            // Receive The Next Line
            final String message = mInStream.readLine();
            // Debug Some Information
            //mLogger.success("Receiving '" + message + "'");
            // Return Received Data
            return message;
        } catch (final IOException exc) {
            // Debug Some Information
            mLogger.warning(exc.toString());
            // Otherwise Return Null
            return null;
        }
    }

    // Send some message 
    public final boolean send(final String string) {
        try {
            // Send the next message
            mOutStream.write(string);
            mOutStream.newLine();
            mOutStream.flush();
            // Print some information
            //mLogger.success("Sending '" + string + "'");
            // Return true at success
            return true;
        } catch (final IOException exc) {
            // Print some information
            mLogger.failure(exc.toString());
            // Return false at failure 
            return false;
        }
    }

    // Execute the client thread
    @Override
    public final void run() {
        while (!mDone) {
            // Receive a new message
            final String message = recv();
            if (message != null) {
                // Handle the message
                mExecutor.handle(message, this);
            }
        }
    }
}
