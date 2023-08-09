using System;
using System.Diagnostics;
using System.IO.Pipes;
using System.Text;

namespace AccessConroldataimport.Common
{
    public class PipeClient
    {
        public static void WriteLine(string SendStr)
        {
            try
            {
                Console.WriteLine(SendStr);

                string strPipes = XmlConec.getAppSettings_("Environment") + "_pipes";
                //Console.WriteLine(SendStr);
                NamedPipeClientStream pipeStream = new NamedPipeClientStream(".", strPipes, PipeDirection.Out, PipeOptions.Asynchronous);

                // The connect function will indefinitely wait for the pipe to become available
                // If that is not acceptable specify a maximum waiting time (in ms)
                pipeStream.Connect(0);
                Debug.WriteLine("[Client] Pipe connection established");

                byte[] _buffer = Encoding.UTF8.GetBytes(SendStr);
                pipeStream.BeginWrite(_buffer, 0, _buffer.Length, AsyncSend, pipeStream);
            }
            catch
            {

            }
        }

        private static void AsyncSend(IAsyncResult iar)
        {
            try
            {
                // Get the pipe
                NamedPipeClientStream pipeStream = (NamedPipeClientStream)iar.AsyncState;

                // End the write
                pipeStream.EndWrite(iar);
                pipeStream.Flush();
                pipeStream.Close();
                pipeStream.Dispose();
            }
            catch
            {

            }
        }
    }
}
