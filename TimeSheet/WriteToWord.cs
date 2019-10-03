using Novacode;
using System;
using System.Diagnostics;
 
namespace TimeSheet
{
    public class WriteToWord
    {      
        public void CreateSampleDocument()
        {
            // Modify to suit your machine:
            string fileName = @"D:\Users\John\Documents\DocXExample.docx";
  
            // Create a document in memory:
            var doc = DocX.Create(fileName);
  
            // Insert a paragrpah:
            doc.InsertParagraph("This is my first paragraph");
  
            // Save to the output directory:
            doc.Save();
  
            // Open in Word:
            Process.Start("WINWORD.EXE", fileName);
        }
    }
}