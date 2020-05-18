﻿namespace TimeSheetWinJobs
{
    partial class ProjectInstaller
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.TimeSheetProcInstaller = new System.ServiceProcess.ServiceProcessInstaller();
            this.TimSheetServiceInstaller = new System.ServiceProcess.ServiceInstaller();
            // 
            // TimeSheetProcInstaller
            // 
            this.TimeSheetProcInstaller.Account = System.ServiceProcess.ServiceAccount.LocalSystem;
            this.TimeSheetProcInstaller.Password = null;
            this.TimeSheetProcInstaller.Username = null;
            // 
            // TimSheetServiceInstaller
            // 
            this.TimSheetServiceInstaller.ServiceName = "TimeSheetJobs";
            this.TimSheetServiceInstaller.StartType = System.ServiceProcess.ServiceStartMode.Automatic;
            // 
            // ProjectInstaller
            // 
            this.Installers.AddRange(new System.Configuration.Install.Installer[] {
            this.TimeSheetProcInstaller,
            this.TimSheetServiceInstaller});

        }

        #endregion

        private System.ServiceProcess.ServiceProcessInstaller TimeSheetProcInstaller;
        private System.ServiceProcess.ServiceInstaller TimSheetServiceInstaller;
    }
}