USE [dbUtility]
GO
/****** Object:  Table [dbo].[Rating]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rating](
	[Rating_Id] [int] IDENTITY(1,1) NOT NULL,
	[Rating_Ratings] [int] NULL,
	[UtilityProvider_Id] [int] NULL,
 CONSTRAINT [PK_Rating] PRIMARY KEY CLUSTERED 
(
	[Rating_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UDays]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UDays](
	[UDays_Id] [int] IDENTITY(1,1) NOT NULL,
	[UDays_Name] [varchar](50) NULL,
 CONSTRAINT [PK_Day] PRIMARY KEY CLUSTERED 
(
	[UDays_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  UserDefinedFunction [dbo].[TimeFunction]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE  FUNCTION [dbo].[TimeFunction]
(
    @HOUR				INT,
    @MINUTE				INT
)
RETURNS TIME
AS
BEGIN
    DECLARE @NEWTIME TIME;    
    SELECT @NEWTIME = CONVERT(Time,(CAST (@HOUR AS VARCHAR(5))+ ':' + CAST ( @MINUTE AS VARCHAR(5))+ ':' +'00'))
    RETURN  @NEWTIME    
END
GO
/****** Object:  Table [dbo].[UtilityArea]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UtilityArea](
	[UtilityArea_Id] [int] IDENTITY(1,1) NOT NULL,
	[UtilityArea_Name] [varchar](50) NULL,
 CONSTRAINT [PK_UtilityArea] PRIMARY KEY CLUSTERED 
(
	[UtilityArea_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Offer]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Offer](
	[Offer_Id] [int] IDENTITY(1,1) NOT NULL,
	[Offer_Heading] [varchar](50) NULL,
	[Offer_Desc] [varchar](50) NULL,
	[Offer_Active] [bit] NULL,
 CONSTRAINT [PK_Offer] PRIMARY KEY CLUSTERED 
(
	[Offer_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[MsgStatus]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[MsgStatus](
	[MsgStatus_Id] [int] IDENTITY(1,1) NOT NULL,
	[MsgStatus_RecvType] [varchar](50) NULL,
	[MsgStatus_RecvId] [int] NULL,
	[MsgStatus_Message] [varchar](50) NULL,
	[MsgStatus_Status] [bit] NULL,
 CONSTRAINT [PK_MsgStatus] PRIMARY KEY CLUSTERED 
(
	[MsgStatus_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Notifications]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Notifications](
	[Notifications_Id] [int] IDENTITY(1,1) NOT NULL,
	[Notifications_Heading] [varchar](50) NULL,
	[Notifications_Description] [varchar](250) NULL,
	[Notifications_Active] [bit] NULL,
 CONSTRAINT [PK_Notification] PRIMARY KEY CLUSTERED 
(
	[Notifications_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DropCharges]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DropCharges](
	[DropCharges_Id] [int] IDENTITY(1,1) NOT NULL,
	[DropCharges_TimeFrame] [int] NULL,
	[DropCharges_AmtPer] [decimal](18, 2) NULL,
 CONSTRAINT [PK_DropCharges] PRIMARY KEY CLUSTERED 
(
	[DropCharges_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  UserDefinedFunction [dbo].[DateFunction]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE  FUNCTION [dbo].[DateFunction]
(
    @DAY				INT,
    @MONTH				INT,
    @YEAR				INT
)
RETURNS DATE
AS
BEGIN
    DECLARE @NEWDATE DATE;
     SELECT @NEWDATE = DATEADD(MM, (@YEAR - 1900) * 12 + @MONTH - 1 , @DAY - 1) 
    RETURN  @NEWDATE    
END
GO
/****** Object:  Table [dbo].[ComboPlan]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ComboPlan](
	[ComboPlan_id] [int] IDENTITY(1,1) NOT NULL,
	[ComboPlan_Name] [varchar](50) NULL,
 CONSTRAINT [PK_ComboPlan] PRIMARY KEY CLUSTERED 
(
	[ComboPlan_id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Customer](
	[Customer_Id] [int] IDENTITY(1,1) NOT NULL,
	[Customer_Name] [varchar](50) NULL,
	[Customer_Email] [varchar](50) NULL,
	[Customer_Password] [varchar](50) NULL,
	[Customer_Mobile] [varchar](50) NULL,
	[Customer_Location] [varchar](50) NULL,
	[Customer_Address1] [varchar](150) NULL,
	[Customer_Address2] [varchar](150) NULL,
	[Customer_Longitude] [varchar](50) NULL,
	[Customer_Latitude] [varchar](50) NULL,
	[Customer_RegDay] [int] NULL,
	[Customer_RegMon] [int] NULL,
	[Customer_RegYear] [int] NULL,
	[Customer_Active] [bit] NULL,
	[Customer_DeviceId] [varchar](50) NULL,
	[Customer_FirstLogin] [bit] NULL,
	[Customer_Balance] [decimal](10, 2) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[Customer_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Currency]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Currency](
	[Currency_Id] [int] IDENTITY(1,1) NOT NULL,
	[Currency_Name] [varchar](50) NULL,
 CONSTRAINT [PK_Currency] PRIMARY KEY CLUSTERED 
(
	[Currency_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UtilityType]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UtilityType](
	[UtilityType_Id] [int] IDENTITY(1,1) NOT NULL,
	[UtilityType_Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_UtilityType] PRIMARY KEY CLUSTERED 
(
	[UtilityType_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  UserDefinedFunction [dbo].[ConvertCommaValuesAsTable]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[ConvertCommaValuesAsTable] 
( 
	@CommaValuesArray							VARCHAR(MAX)
) 

RETURNS @TempTable TABLE 
(	
	ConvertValues								INT,
	ID								INT IDENTITY(1,1) NOT NULL
)
    
AS

BEGIN
	DECLARE @XmlHoldValues XML
	SELECT @XmlHoldValues = CONVERT(XML,'<root><s>' + REPLACE(@CommaValuesArray,',','</s><s>') + '</s></root>')
	
	INSERT INTO @TempTable(ConvertValues)
	SELECT 
		ConvertValues				=		T.C.value('.','VARCHAR(20)')
	FROM 
		@XmlHoldValues.nodes('/root/s') T(C)	
		
    RETURN
END
GO
/****** Object:  Table [dbo].[UtilityProvider]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UtilityProvider](
	[UtilityProvider_Id] [int] IDENTITY(1,1) NOT NULL,
	[UtilityProvider_Name] [varchar](50) NULL,
	[UtilityProvider_Mobile] [varchar](50) NULL,
	[UtilityProvider_Email] [varchar](50) NULL,
	[UtilityProvider_Password] [varchar](50) NULL,
	[UtilityProvider_Location] [varchar](50) NULL,
	[UtilityProvider_Address] [varchar](50) NULL,
	[UtilityProvider_ImgURL] [varchar](50) NULL,
	[UtilityProvider_Active] [bit] NULL,
	[UtilityProvider_RegDay] [int] NULL,
	[UtilityProvider_RegMon] [int] NULL,
	[UtilityProvider_RegYear] [int] NULL,
	[UtilityProvider_RatePerHour] [decimal](10, 2) NULL,
	[UtilityProvider_Experience] [varchar](50) NULL,
	[UtilityProvider_FixziRating] [int] NULL,
	[UtilityProvider_Latitude] [varchar](50) NULL,
	[UtilityProvider_Longitude] [varchar](50) NULL,
 CONSTRAINT [PK_UtilityProvider] PRIMARY KEY CLUSTERED 
(
	[UtilityProvider_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UtilityCompliantType]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UtilityCompliantType](
	[UtilityCompliantType_Id] [int] IDENTITY(1,1) NOT NULL,
	[UtilityCompliantType_Type] [varchar](50) NULL,
	[UtilityType_Id] [int] NULL,
 CONSTRAINT [PK_UtilityTypeCat1] PRIMARY KEY CLUSTERED 
(
	[UtilityCompliantType_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_UpdateActiveFRatingExpe]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityProvider_UpdateActiveFRatingExpe]
(
	@UtilityProvider_FixziRating	INT,
	@UtilityProvider_Experience		VARCHAR(50),
	@UtilityProvider_Id				INT,
	@Insert_Status					INT OUTPUT
)
AS
BEGIN
	UPDATE dbo.UtilityProvider 
	SET UtilityProvider_Active			=		1,
		UtilityProvider_Experience		=		@UtilityProvider_Experience ,
		UtilityProvider_FixziRating		=		@UtilityProvider_FixziRating
	
	WHERE UtilityProvider_Id			=		@UtilityProvider_Id;
	
	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_Login]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @login	INT
--EXEC UtilityProvider_Login 'vivek@gmail.com','Tech',@login OUT
CREATE PROCEDURE [dbo].[UtilityProvider_Login]
	(
		@UtilityProvider_Email		VARCHAR(50),
		@UtilityProvider_Password	VARCHAR(50),
		@login						INT OUTPUT,
		@Selected_Status			INT OUTPUT
	)
AS
BEGIN
	SELECT  UtilityProvider_Id,
			UtilityProvider_Name,
			UtilityProvider_Mobile,
			UtilityProvider_Email,
			UtilityProvider_Password,
			UtilityProvider_Address,
			UtilityProvider_ImgURL,
			UtilityProvider_Active,
			dbo.DateFunction(UtilityProvider_RegDay,UtilityProvider_RegMon,UtilityProvider_RegYear)As UtilityProvider_RegDate,
			UtilityProvider_RatePerHour,
			UtilityProvider_Experience,
			UtilityProvider_FixziRating
	FROM UtilityProvider 
	WHERE 
		UtilityProvider.UtilityProvider_Email =@UtilityProvider_Email 
		and 
		UtilityProvider.UtilityProvider_Password=@UtilityProvider_Password
		and
		UtilityProvider.UtilityProvider_Active='True'
		
	IF( @@rowcount > 0)
		SET @Selected_Status			=		1
		ELSE
		SET @Selected_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_GetForgotPasswordDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityProvider_GetForgotPasswordDetails]
(
	@UtilityProvider_Email	VARCHAR(50),
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	SELECT 
			UtilityProvider_Id,
			UtilityProvider_Name,
			UtilityProvider_Mobile,
			UtilityProvider_Email,
			UtilityProvider_Password,
			UtilityProvider_Location,
			UtilityProvider_Address,
			UtilityProvider_ImgURL,
			UtilityProvider_Active,
			dbo.datefunction(UtilityProvider_RegDay,UtilityProvider_RegMon,UtilityProvider_RegYear)as Reg_Date,
			UtilityProvider_RatePerHour,
			UtilityProvider_Latitude,
			UtilityProvider_Longitude 
	FROM 
			UtilityProvider
	Where 
			UtilityProvider_Email		=		@UtilityProvider_Email;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityArea_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityArea_GetDetails]
(
	@Selected_Status			INT OUTPUT
)
AS
BEGIN
	SELECT 
		UtilityArea_Id,
		UtilityArea_Name 
	FROM dbo.UtilityArea;
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	

END
GO
/****** Object:  StoredProcedure [dbo].[UtilityArea_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityArea_AddDetails]
(
	@UtilityArea_Name	VARCHAR(50),
	@UtilityArea_Id		INT OUTPUT,
	@insert_Status		INT OUTPUT
)
AS
BEGIN
	DECLARE @Count_Id INT;
		SELECT @Count_Id = COUNT(UtilityArea_Id) FROM UtilityArea WHERE UtilityArea_Name = @UtilityArea_Name;
	IF(@Count_Id = 0)
	BEGIN
		INSERT INTO dbo.UtilityArea 
				(
					UtilityArea_Name
				)
				VALUES
				(
					@UtilityArea_Name
				);

		SET @UtilityArea_Id=SCOPE_IDENTITY();
		
	END
	IF(@@ROWCOUNT > 0)
		SET @Insert_Status			=		1;
		ELSE
		SET @Insert_Status			=		0;
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @UtilityProvider_Id	INT,@insertStatus	INT;
--EXECUTE UtilityProvider_AddDetails 'joji','9983324411','joji141301@gmail.com','pass123','kollam','kollam','aaa.jpg','500','1.23','8.93',@UtilityProvider_Id,@insertStatus;
--PRINT @UtilityProvider_Id
--PRINT @insertStatus

CREATE PROCEDURE [dbo].[UtilityProvider_AddDetails]
(
	@UtilityProvider_Name			VARCHAR(50),
	@UtilityProvider_Mobile			VARCHAR(50),
	@UtilityProvider_Email			VARCHAR(50),
	@UtilityProvider_Password		VARCHAR(50),
	@UtilityProvider_Location		VARCHAR(50),
	@UtilityProvider_Address		VARCHAR(50),
	@UtilityProvider_ImgURL			VARCHAR(50),
	@UtilityProvider_RatePerHour	DECIMAL(10, 2),
	@UtilityProvider_Latitude		VARCHAR(50),
	@UtilityProvider_Longitude		VARCHAR(50),
	@UtilityProvider_Id				INT OUTPUT,
	@insertStatus					INT OUTPUT
)
AS
BEGIN
	SET			@UtilityProvider_Id		=		0
	DECLARE		@Customer_Count			INT,
				@UtilityProvider_Count	INT;
				
	SELECT @Customer_Count			=	COUNT(Customer_Id)			FROM dbo.Customer			WHERE Customer.Customer_Email = @UtilityProvider_Email OR Customer.Customer_Mobile = @UtilityProvider_Mobile	
	SELECT @UtilityProvider_Count	=	COUNT(UtilityProvider_Id)	FROM dbo.UtilityProvider 	WHERE UtilityProvider.UtilityProvider_Email = @UtilityProvider_Email OR UtilityProvider.UtilityProvider_Mobile = @UtilityProvider_Mobile
	SELECT @UtilityProvider_Id
	IF(@UtilityProvider_Count = 0 AND @Customer_Count = 0)
	BEGIN
	SELECT @UtilityProvider_Count AS UtilityProvider_Count, @Customer_Count AS Customer_Count
	INSERT INTO dbo.UtilityProvider
				(
					UtilityProvider_Name,
					UtilityProvider_Mobile,
					UtilityProvider_Email,
					UtilityProvider_Password,
					UtilityProvider_Location,
					UtilityProvider_Address,
					UtilityProvider_ImgURL,
					UtilityProvider_Active,
					UtilityProvider_RegDay,
					UtilityProvider_RegMon,
					UtilityProvider_RegYear,
					UtilityProvider_RatePerHour,
					UtilityProvider_Latitude,
					UtilityProvider_Longitude 
				)
				VALUES
				(
					@UtilityProvider_Name,
					@UtilityProvider_Mobile,
					@UtilityProvider_Email,
					@UtilityProvider_Password,
					@UtilityProvider_Location,
					@UtilityProvider_Address,
					@UtilityProvider_ImgURL,
					0,
					Day(getdate()),
					Month(getdate()),
					Year(getdate()),
					@UtilityProvider_RatePerHour,
					@UtilityProvider_Latitude,
					@UtilityProvider_Longitude 
				);
			
			SET @UtilityProvider_Id = SCOPE_IDENTITY();
		
	END
		IF(@@ROWCOUNT > 0 )
		SET @insertStatus = 1;		
		ELSE	
		SET @insertStatus = 0;	
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_ChangePassword]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityProvider_ChangePassword]
(
	@UtilityProvider_Email			VARCHAR(50),
	@UtilityProvider_OldPassword	VARCHAR(50),
	@UtilityProvider_NewPassword	VARCHAR(50),
	@Update_Status					BIT OUTPUT
)
AS
BEGIN
	UPDATE dbo.UtilityProvider 
	SET UtilityProvider_Password	=	@UtilityProvider_NewPassword 
	WHERE 
	UtilityProvider_Email			=	@UtilityProvider_Email
	AND
	UtilityProvider_Password		=	@UtilityProvider_OldPassword
	 
	IF( @@ROWCOUNT > 0)
		SET @Update_Status			=		1
	ELSE
		SET @Update_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityType_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--declare @a int
--exec UtilityType_GetDetails 1 output
CREATE PROCEDURE [dbo].[UtilityType_GetDetails]
(
	@Selected_Status INT OUTPUT
)
AS
BEGIN
	SELECT 
		UtilityType_Id,
		UtilityType_Name 
	FROM dbo.UtilityType;
	IF( @@ROWCOUNT > 0)
		SET @Selected_Status			=		1
		ELSE
		SET @Selected_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityType_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityType_AddDetails]
(
	@UtilityType_Name VARCHAR(50),
	@UtilityType_Id INT OUTPUT,
	@InsertStatus INT OUTPUT
)
AS
BEGIN

	DECLARE @Count_UtilityName INT;
	SELECT @Count_UtilityName = COUNT(UtilityType_Name) FROM dbo.UtilityType WHERE dbo.UtilityType.UtilityType_Name = @UtilityType_Name
	IF (@Count_UtilityName = 0)
	BEGIN
		INSERT INTO dbo.UtilityType
					(
						UtilityType_Name
					)
					VALUES
					(
						@UtilityType_Name
					);
	
	SET @UtilityType_Id = SCOPE_IDENTITY();
	END
	IF( @@ROWCOUNT > 0 )
		SET @InsertStatus=1;
		ELSE
		SET @InsertStatus=0;
END
GO
/****** Object:  Table [dbo].[Appointment]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Appointment](
	[Appointment_Id] [int] IDENTITY(1,1) NOT NULL,
	[Appointment_Issue] [varchar](50) NULL,
	[Appointment_issueIMG] [varchar](50) NULL,
	[Appointment_RegDay] [int] NULL,
	[Appointment_RegMon] [int] NULL,
	[Appointment_RegYear] [int] NULL,
	[Appointment_Location] [varchar](50) NULL,
	[Appointment_Address] [varchar](150) NULL,
	[Appointment_Hour] [int] NULL,
	[Appointment_Minute] [int] NULL,
	[Appointment_Day] [int] NULL,
	[Appointment_Month] [int] NULL,
	[Appointment_Year] [int] NULL,
	[Appointment_Status] [varchar](50) NULL,
	[Appointment_VoiceURL] [varchar](50) NULL,
	[Appointment_StartHour] [int] NULL,
	[Appointment_StartMinute] [int] NULL,
	[Appointment_EndHour] [int] NULL,
	[Appointment_EndMinute] [int] NULL,
	[Appointment_Fare] [decimal](10, 2) NULL,
	[Appointment_Like] [bit] NULL,
	[Appointment_Rating] [decimal](2, 1) NULL,
	[Appointment_Latitude] [varchar](50) NULL,
	[Appointment_Longitude] [varchar](50) NULL,
	[Customer_Id] [int] NOT NULL,
	[UtilityProvider_Id] [int] NULL,
 CONSTRAINT [PK_Appointment] PRIMARY KEY CLUSTERED 
(
	[Appointment_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[Customer_DropCharges]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_DropCharges]
(
	@TimeDiff				INT,
	@UtilityProvider_Id		INT,
	@Customer_Id			INT
)
AS
BEGIN
	DECLARE @DropCharge_AmtPer		DECIMAL(18,2),
			@Min_Rate				DECIMAL(18,2),
			@DropCharge				DECIMAL(18,2),
			@Customer_Balance		DECIMAL(18,2),
			@Current_Balance		DECIMAL(18,2);
			
			
	SELECT	@DropCharge_AmtPer		= DropCharges_AmtPer			
	FROM 	DropCharges     
	WHERE	DropCharges_TimeFrame	= @TimeDiff;
	
	SELECT	@Min_Rate				= UtilityProvider_RatePerHour/2 
	FROM	UtilityProvider 
	WHERE	UtilityProvider_Id		= @UtilityProvider_Id;
	
	SET		@DropCharge				= @Min_Rate* (@DropCharge_AmtPer/100);
	
	SELECT	@Customer_Balance		= Customer_Balance				
	FROM	Customer		 
	WHERE	Customer_Id				= @Customer_Id;
	
	SET		@Current_Balance		= (@Customer_Balance - @DropCharge);
		
	UPDATE	Customer 
	SET		Customer_Balance		= @Current_Balance				WHERE Customer_Id = @Customer_Id;
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_ChangePassword]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_ChangePassword]
(
	@Customer_Email			VARCHAR(50),
	@Customer_OldPassword	VARCHAR(50),
	@Customer_NewPassword	VARCHAR(50),
	@Update_Status			BIT OUTPUT
)
AS
BEGIN
	UPDATE Customer 
	SET Customer_Password		=		@Customer_NewPassword 
	WHERE 
	Customer_Email				=		@Customer_Email
	AND
	Customer_Password			=		@Customer_OldPassword 

	IF( @@ROWCOUNT > 0)
		SET @Update_Status			=		1
	ELSE
		SET @Update_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE		@Customer_Id INT,@Customer_InsertStatus  INT 
--EXECUTE Customer_AddDetails '1','vfdsDkf@gmail.coM','9xKY9sdkSw55krRsG14uYIA==','4582','5','10','7','8','9','10',@Customer_Id OUT,@Customer_InsertStatus OUT

CREATE PROCEDURE [dbo].[Customer_AddDetails]
(
	@Customer_Name				VARCHAR(50),
	@Customer_Email				VARCHAR(50),
	@Customer_Password			VARCHAR(50),
	@Customer_Mobile			VARCHAR(50),
	@Customer_Location			VARCHAR(50),
	@Customer_Address1			VARCHAR(150),
	@Customer_Address2			VARCHAR(150),
	@Customer_Longitude			VARCHAR(50),
	@Customer_Latitude			VARCHAR(50),
	@Customer_DeviceId			VARCHAR(50),
	@Customer_Id				INT OUTPUT,
	@Customer_InsertStatus		INT OUTPUT
)

AS

BEGIN
	DECLARE		@Customer_Count INT, @UtilityProvider_Count INT;
	
	SELECT @Customer_Count			=	COUNT(Customer_Id)			FROM dbo.Customer			WHERE Customer.Customer_Email = @Customer_Email OR Customer.Customer_Mobile = @Customer_Mobile	
	SELECT @UtilityProvider_Count	=	COUNT(UtilityProvider_Id)	FROM dbo.UtilityProvider	WHERE UtilityProvider.UtilityProvider_Email =	@Customer_Email OR UtilityProvider.UtilityProvider_Mobile = @Customer_Mobile

	IF(@Customer_Count = 0 AND @UtilityProvider_Count = 0)	
	BEGIN	
		INSERT INTO dbo.Customer
		(
			Customer_Name,
			Customer_Email,
			Customer_Password,
			Customer_Mobile,
			Customer_Location,
			Customer_Address1,
			Customer_Address2,
			Customer_Longitude ,
			Customer_Latitude ,
			Customer_RegDay ,
			Customer_RegMon ,
			Customer_RegYear,
			Customer_Active,
			Customer_DeviceId,
			Customer_FirstLogin,
			Customer_Balance	
		)
		VALUES
		(
			@Customer_Name,
			@Customer_Email,
			@Customer_password,
			@Customer_Mobile,
			@Customer_Location,
			@Customer_Address1,
			@Customer_Address2,
			@Customer_Longitude ,
			@Customer_Latitude ,
			DAY(getdate()),
			MONTH(getdate()),
			YEAR(getdate()),
			0,
			@Customer_DeviceId,
			1,
			0
		);		
		SET @Customer_Id = SCOPE_IDENTITY();
		PRINT @Customer_Id
	END	
	IF( @@ROWCOUNT > 0)
		SET @Customer_InsertStatus			=		1
		ELSE
		SET @Customer_InsertStatus			=		0
	PRINT @Customer_InsertStatus
END
GO
/****** Object:  StoredProcedure [dbo].[ChangePassword]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Update_Status BIT
--EXEC ChangePassword 'vive@gmail.com','tech123','Tech',@Update_Status OUT
CREATE PROCEDURE [dbo].[ChangePassword]
(
	@Email				VARCHAR(50),
	@OldPassword		VARCHAR(50),
	@NewPassword		VARCHAR(50),
	@Update_Status		BIT OUTPUT
)
AS
BEGIN
	DECLARE		@ChangePasswordCount		INT
	SET			@ChangePasswordCount		=		0
	
	SELECT  @ChangePasswordCount			=		COUNT(Customer_Id)
	FROM 
		Customer 
	WHERE 
		Customer.Customer_Email				=		@Email 
	
	IF (@ChangePasswordCount > 0)
	BEGIN
		UPDATE Customer 
			SET Customer_Password			=		@NewPassword 
			WHERE 
			Customer_Email					=		@Email
			AND
			Customer_Password				=		@OldPassword 
			
			SELECT			'Customer'
	END
	ELSE
	BEGIN
		SELECT  @ChangePasswordCount		=	COUNT(UtilityProvider_Id)
		FROM 
			UtilityProvider 
		WHERE 
			UtilityProvider.UtilityProvider_Email 
											=		@Email 
		IF (@ChangePasswordCount > 0)
		BEGIN
			UPDATE dbo.UtilityProvider 
			SET UtilityProvider_Password	=	@NewPassword 
			WHERE 
			UtilityProvider_Email			=	@Email
			AND
			UtilityProvider_Password		=	@OldPassword
			
			SELECT			'Provider'								
		END
	END
	
	IF( @@ROWCOUNT > 0)
			SET @Update_Status			=		1
			ELSE
			SET @Update_Status			=		0
	
			PRINT @Update_Status	
END
GO
/****** Object:  StoredProcedure [dbo].[MsgStatus_UpdateStatus]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[MsgStatus_UpdateStatus]
(
	@MsgStatus_RecvType		Varchar(50),
	@MsgStatus_RecvId		INT,
	@Update_Status			BIT OUTPUT
)
AS
BEGIN
	UPDATE MsgStatus SET MsgStatus_Status = 1 WHERE MsgStatus_RecvType = @MsgStatus_RecvType AND MsgStatus_RecvId = @MsgStatus_RecvId;
	
	IF( @@rowcount >0 )
		SET @Update_Status = 1;
		ELSE 
		SET @Update_Status = 0;
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_UpdateAddress2]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_UpdateAddress2]
(
	@Customer_Address2	VARCHAR(50),
	@Customer_Id		INT,
	@Insert_Status		INT OUTPUT
)
AS
BEGIN
	UPDATE dbo.Customer 
	SET	Customer_Address2		=		@Customer_Address2
	WHERE Customer_Id			=		@Customer_Id;
	 
	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_UpdateActive]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_UpdateActive]
(
	@Customer_Id	INT,
	@Update_Status	INT OUTPUT
)
AS
BEGIN
	UPDATE dbo.Customer 
	SET	Customer_Active		=		1 
	WHERE 
	Customer_Id				=		@Customer_Id;
	
	IF( @@ROWCOUNT > 0)
		SET @Update_Status			=		1
	ELSE
		SET @Update_Status			=		0	
	
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_GetForgotPasswordDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_GetForgotPasswordDetails]
(
	@Customer_Email			VARCHAR(50),
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
declAre @CustomerIdCount INT;
SELECT @CustomerIdCount=COUNT(Customer_Id) from Customer where Customer_Email=@Customer_Email

if(@CustomerIdCount>0)
begin
	SELECT  
		Customer_Name,
		Customer_Email,
		Customer_Password
		--Customer_Mobile,
		--Customer_Location,
		--Customer_Address1,
		--Customer_Address2,
		--Customer_Longitude,
		--Customer_Latitude,
	 --   dbo.DateFunction(Customer_RegDay,Customer_RegMon,Customer_RegYear)AS Customer_RegDate,
		--Customer_Active,
		--Customer_DeviceId,
		--Customer_FirstLogin,
		--Customer_Balance
	FROM dbo.Customer 
	WHERE dbo.Customer.Customer_Email		=		@Customer_Email 
	SET @Selected_Status			=		1
End
	else
	begin
	select 'Incorrect UserName'
	SET @Selected_Status			=		0	
	end

	
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_Getdetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_Getdetails]
(
	@Customer_Id			INT,
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	
	SELECT  
		Customer_Id,
		Customer_Name,
		Customer_Email,
		Customer_Password,
		Customer_Mobile,
		Customer_Location,
		Customer_Address1,
		Customer_Address2,
		Customer_Longitude,
		Customer_Latitude,
		dbo.DateFunction(Customer_RegDay,Customer_RegMon,Customer_RegYear)as Customer_RegDate,
		Customer_Active,
		Customer_DeviceId,
		Customer_FirstLogin,
		Customer_Balance
	FROM dbo.Customer
	WHERE Customer_Id = @Customer_Id; 

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_GetCurrentBalance]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_GetCurrentBalance]
(
	@Customer_Id			INT,
	@Selected_Status		INT OUTPUT
) 
AS
BEGIN
		SELECT 
				Customer_Id,
				Customer_Name,
				Customer_Balance AS Current_Balance
		FROM     
			    Customer 
        WHERE
				Customer_Id = @Customer_Id;
		
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[GetForgotPasswordDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Selected_Status INT
--EXEC GetForgotPasswordDetails 'vivejhkk@gmail.com',@Selected_Status OUT
CREATE PROCEDURE [dbo].[GetForgotPasswordDetails]
(
	@Email					VARCHAR(50),
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	DECLARE		@ForgotPasswordCount		INT
	SET			@ForgotPasswordCount		=		0
	
	SELECT  @ForgotPasswordCount			=		COUNT(Customer_Id)
	FROM 
		Customer 
	WHERE 
		Customer.Customer_Email			=		@Email 
	
	IF (@ForgotPasswordCount > 0)
	BEGIN
		SELECT  
			Customer_Name,
			Customer_Email,
			Customer_Password
		FROM 
			Customer 
		WHERE 
			Customer.Customer_Email			=	@Email
		SELECT			'Customer'
	END
	ELSE
	BEGIN
		SELECT  @ForgotPasswordCount		=	COUNT(UtilityProvider_Id)
		FROM 
			UtilityProvider 
		WHERE 
			UtilityProvider.UtilityProvider_Email 
											=		@Email 
		IF (@ForgotPasswordCount > 0)
		BEGIN
			SELECT  
				UtilityProvider_Name,
				UtilityProvider_Email,
				UtilityProvider_Password
			FROM 
				UtilityProvider 
			WHERE 
				UtilityProvider.UtilityProvider_Email 
											=		@Email 
			SELECT			'Provider'								
		END
	END
	
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1;
	ELSE
	BEGIN
	SELECT 'Incorrect UserName'
	SET @Selected_Status			=		0;
	END
	PRINT @Selected_Status	
END
GO
/****** Object:  Table [dbo].[ProviderArea]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProviderArea](
	[ProviderArea_Id] [int] IDENTITY(1,1) NOT NULL,
	[UtilityArea_Id] [int] NULL,
	[UtilityProvider_Id] [int] NULL,
 CONSTRAINT [PK_ProviderArea] PRIMARY KEY CLUSTERED 
(
	[ProviderArea_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payment]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Payment](
	[Payment_Id] [int] IDENTITY(1,1) NOT NULL,
	[Payment_Status] [bit] NULL,
	[Payment_Amount] [decimal](10, 2) NULL,
	[Payment_Day] [int] NULL,
	[Payment_Mon] [int] NULL,
	[Payment_Year] [int] NULL,
	[Payment_Hour] [int] NULL,
	[Payment_Minute] [int] NULL,
	[Payment_SubscrId] [varchar](50) NULL,
	[Customer_Id] [int] NULL,
	[Currency_Id] [int] NULL,
 CONSTRAINT [PK_Payment] PRIMARY KEY CLUSTERED 
(
	[Payment_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[Notifications_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Notifications_GetDetails]
(
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	SELECT 
		Notifications_Id,
		Notifications_Heading,
		Notifications_Description,
		Notifications_Active
	FROM dbo.Notifications;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[Notifications_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Notifications_AddDetails]
(
	@Notifications_Heading		VARCHAR(50),
	@Notifications_Description	VARCHAR(250),
	@Notifications_Active		BIT,
	@Notifications_Id			INT OUTPUT,
	@Insert_Status				INT OUTPUT
)
AS
BEGIN
	
	INSERT INTO dbo.Notifications
				(
					Notifications_Heading,
					Notifications_Description,
					Notifications_Active
				)
				VALUES
				(
					@Notifications_Heading,
					@Notifications_Description,
					@Notifications_Active
				);
	
	SET @Notifications_Id = SCOPE_IDENTITY();
	
	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[User_Login]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--EXECUTE User_Login 'popo@gmail.com','Em5/acA5B4M='


CREATE PROCEDURE [dbo].[User_Login]
(
	@Email						VARCHAR(50),
	@Password					VARCHAR(50)
)
AS
BEGIN
	DECLARE		@LoginCount				INT
	SET			@LoginCount				=			0
	
	SELECT  @LoginCount					=		COUNT(Customer_Name)
	FROM 
		Customer 
	WHERE 
		Customer.Customer_Email			=		@Email 
	AND 
		Customer.Customer_Password		=		@Password

	IF (@LoginCount > 0)
	BEGIN
		SELECT 
			Customer_Id, 
			Customer_Name,
			Customer_Email,
			Customer_Password,
			Customer_Mobile,
			Customer_Location,
			Customer_Address1,
			Customer_Address2,
			Customer_Longitude,
			Customer_Latitude,
			dbo.DateFunction(Customer_RegDay,Customer_RegMon,Customer_RegYear)AS Customer_RegDate,
			Customer_Active,
			Customer_DeviceId,
			Customer_FirstLogin,
			Customer_Balance
		FROM 
			Customer 
		WHERE 
			Customer.Customer_Email			=		@Email 
		AND 
			Customer.Customer_Password		=		@Password	
		SELECT			'Customer'
	END
	ELSE
	BEGIN
		SELECT  @LoginCount					=		COUNT(UtilityProvider_Id)
		FROM 
			UtilityProvider 
		WHERE 
			UtilityProvider.UtilityProvider_Email 
											=		@Email 
		AND 
			UtilityProvider.UtilityProvider_Password
											=		@Password
		IF (@LoginCount > 0)
		BEGIN
			SELECT  
				UtilityProvider_Id,
				UtilityProvider_Name,
				UtilityProvider_Mobile,
				UtilityProvider_Email,
				UtilityProvider_Password,
				UtilityProvider_Address,
				UtilityProvider_ImgURL,
				UtilityProvider_Active,
				dbo.DateFunction(UtilityProvider_RegDay,UtilityProvider_RegMon,UtilityProvider_RegYear)As UtilityProvider_RegDate,
				UtilityProvider_RatePerHour,
				UtilityProvider_Experience,
				UtilityProvider_FixziRating
			FROM 
				UtilityProvider 
			WHERE 
				UtilityProvider.UtilityProvider_Email 
											=		@Email 
			AND 
				UtilityProvider.UtilityProvider_Password
											=		@Password
			SELECT			'Provider'								
		END
		ELSE
		BEGIN			
			SELECT  
				*
			FROM 
				UtilityProvider 
			WHERE 
				UtilityProvider.UtilityProvider_Email 
											=		@Email 
			AND 
				UtilityProvider.UtilityProvider_Password
											=		@Password
			SELECT			'Invalid Username or Password'	
		END
	END
END
GO
/****** Object:  Table [dbo].[ProviderAvailability]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProviderAvailability](
	[ProviderAvailability_Id] [int] IDENTITY(1,1) NOT NULL,
	[ProviderAvailability_FromHour] [int] NULL,
	[ProviderAvailability_FromMin] [int] NULL,
	[ProviderAvailability_ToHour] [int] NULL,
	[ProviderAvailability_ToMin] [int] NULL,
	[UDays_Id] [int] NULL,
	[UtilityProvider_Id] [int] NULL,
 CONSTRAINT [PK_ProviderAvailability] PRIMARY KEY CLUSTERED 
(
	[ProviderAvailability_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[ProviderArea_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ProviderArea_AddDetails]
(
	 @UtilityAreaIdArray				     VARCHAR(MAX),  
	 @UtilityProviderIdArray                 VARCHAR(MAX),
	 @Insert_Status                          INT OUTPUT
)
AS
BEGIN

 DECLARE @X xml
 SELECT @X = CONVERT(xml,'<root><s>' + REPLACE(@UtilityAreaIdArray,',','</s><s>') + '</s></root>')
 
 DECLARE @Y xml
 SELECT @Y = CONVERT(xml,'<root><s>' + REPLACE( @UtilityProviderIdArray,',','</s><s>') + '</s></root>')
 
 
 
 INSERT INTO ProviderArea(UtilityArea_Id,UtilityProvider_Id)
 SELECT 
  UtilityArea_Id = T.C.value('.','VARCHAR(20)'),
  UtilityProvider_Id = S.D.value('.','VARCHAR(20)')  
 FROM 
  @X.nodes('/root/s') T(C),
  @Y.nodes('/root/s') S(D)
 
	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
  
END
GO
/****** Object:  StoredProcedure [dbo].[ProviderAvailability_Reschedule]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ProviderAvailability_Reschedule]
(
	@UtilityProvider_Id INT,
	@ProviderAvailabilityFromHourArray	VARCHAR(MAX),
	@ProviderAvailabilityFromMinArray	VARCHAR(MAX),
	@ProviderAvailabilityToHourArray	VARCHAR(MAX),
	@ProviderAvailabilityToMinArray		VARCHAR(MAX),
	@UDays_Id						    VARCHAR(MAX),
	@ProviderAvailability_Id		    INT OUTPUT,
	@Delete_Status					    INT OUTPUT
)
AS
BEGIN
	DELETE FROM ProviderAvailability WHERE ProviderAvailability.UtilityProvider_Id = @UtilityProvider_Id;
	
SELECT * INTO #FromHour
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityFromHourArray)
		
	SELECT * INTO #FromMin
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityFromMinArray)
		
	SELECT * INTO #ToHour
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityToHourArray)
				
	SELECT * INTO #ToMin
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityToMinArray)			

	SELECT * INTO #UDays
	FROM 
		dbo.ConvertCommaValuesAsTable(@UDays_Id)		
			
	INSERT INTO dbo.ProviderAvailability
	(
		ProviderAvailability_FromHour,
		ProviderAvailability_FromMin,
		ProviderAvailability_ToHour,
		ProviderAvailability_ToMin,
		UDays_Id,
		UtilityProvider_Id		
	)											
	SELECT 
		#FromHour.ConvertValues, 
		#FromMin.ConvertValues, 
		#ToHour.ConvertValues, 
		#ToMin.ConvertValues,
		#UDays.ConvertValues,
		@UtilityProvider_Id				AS			UtilityProvider_Id
	FROM 	
		#FromHour
	JOIN
		#FromMin		
	ON
		#FromMin.ID						=			#FromHour.ID			
	JOIN
		#ToHour
	ON
		#ToHour.ID						=			#FromMin.ID		
	JOIN
		#ToMin
	ON
		#ToMin.ID						=			#ToHour.ID	
	JOIN
		#UDays
	ON
		#UDays.ID						=			#ToMin.ID	
																																					
	DROP TABLE #FromHour
	DROP TABLE #FromMin
	DROP TABLE #ToHour
	DROP TABLE #ToMin
	DROP TABLE #UDays	
 
	SET @ProviderAvailability_Id = SCOPE_IDENTITY();
	
	IF( @@ROWCOUNT > 0)
		SET @Delete_Status			=		1
	ELSE
		SET @Delete_Status			=		0
	
END
GO
/****** Object:  StoredProcedure [dbo].[ProviderAvailability_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--EXEC ProviderAvailability_GetDetails 1
CREATE PROCEDURE [dbo].[ProviderAvailability_GetDetails]
(
	@UtilityProvider_Id		INT,
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	SELECT	DISTINCT
			ProviderAvailability_Id,
			UtilityProvider_Name,
			UDays_Name, 
			(CAST (ProviderAvailability_FromHour AS VARCHAR(5) )+ ':' + CAST ( ProviderAvailability_FromMin AS VARCHAR(5))+ ':' +'00') AS ProviderAvailability_From,
			(CAST (ProviderAvailability_ToHour AS VARCHAR(5) )+ ':' + CAST ( ProviderAvailability_ToMin AS VARCHAR(5))+ ':' +'00') AS ProviderAvailability_To						
	FROM
	        ProviderAvailability 
	        
	        INNER JOIN
            UtilityProvider 
            ON ProviderAvailability.UtilityProvider_Id = UtilityProvider.UtilityProvider_Id 
            
            INNER JOIN
            UDays 
            ON ProviderAvailability.UDays_Id = UDays.UDays_Id    
   WHERE
			ProviderAvailability.UtilityProvider_Id = @UtilityProvider_Id; 

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status	=	1;
	ELSE
	SET @Selected_Status	=	0;	
END
GO
/****** Object:  StoredProcedure [dbo].[ProviderAvailability_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @ProviderAvailability_Id INT, @Insert_Status INT;
--EXECUTE ProviderAvailability_AddDetails '1,2,3','10,20,30','3,4,5','1,1,5','2,5,6',1,@ProviderAvailability_Id,@Insert_Status

CREATE PROCEDURE [dbo].[ProviderAvailability_AddDetails]
(
	@ProviderAvailabilityFromHourArray			VARCHAR(MAX),
	@ProviderAvailabilityFromMinArray			VARCHAR(MAX),
	@ProviderAvailabilityToHourArray			VARCHAR(MAX),	
	@ProviderAvailabilityToMinArray				VARCHAR(MAX),
	@UDays_Id									VARCHAR(MAX),	
	@UtilityProvider_Id							INT,	
	@ProviderAvailability_Id					INT OUTPUT,
	@Insert_Status								INT OUTPUT	
)
AS
BEGIN
	SELECT * INTO #FromHour
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityFromHourArray)
		
	SELECT * INTO #FromMin
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityFromMinArray)
		
	SELECT * INTO #ToHour
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityToHourArray)
				
	SELECT * INTO #ToMin
	FROM 
		dbo.ConvertCommaValuesAsTable(@ProviderAvailabilityToMinArray)			

	SELECT * INTO #UDays
	FROM 
		dbo.ConvertCommaValuesAsTable(@UDays_Id)		
			
	INSERT INTO dbo.ProviderAvailability
	(
		ProviderAvailability_FromHour,
		ProviderAvailability_FromMin,
		ProviderAvailability_ToHour,
		ProviderAvailability_ToMin,
		UDays_Id,
		UtilityProvider_Id		
	)											
	SELECT 
		#FromHour.ConvertValues, 
		#FromMin.ConvertValues, 
		#ToHour.ConvertValues, 
		#ToMin.ConvertValues,
		#UDays.ConvertValues,
		@UtilityProvider_Id				AS			UtilityProvider_Id
	FROM 	
		#FromHour
	JOIN
		#FromMin		
	ON
		#FromMin.ID						=			#FromHour.ID			
	JOIN
		#ToHour
	ON
		#ToHour.ID						=			#FromMin.ID		
	JOIN
		#ToMin
	ON
		#ToMin.ID						=			#ToHour.ID	
	JOIN
		#UDays
	ON
		#UDays.ID						=			#ToMin.ID	
																																					
	DROP TABLE #FromHour
	DROP TABLE #FromMin
	DROP TABLE #ToHour
	DROP TABLE #ToMin
	DROP TABLE #UDays	

	SET @ProviderAvailability_Id = SCOPE_IDENTITY();
	
	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[payment_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[payment_GetDetails]
(
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	SELECT 
		Payment_Id,
		Payment_Status,
		Payment_Amount,
		dbo.DateFunction(Payment_Day,Payment_Mon,Payment_Year)AS Payment_Date,
		CAST (Payment_Hour AS VARCHAR(5) )+ ':' + CAST ( Payment_Minute AS VARCHAR(5))+ ':' +'00'   AS Payment_Time,	 
		Payment_SubscrId,
		Customer_Id
	FROM dbo.Payment;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[Payment_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Payment_AddDetails]    
(    
	  @Payment_Amount     DECIMAL(10,2),
      @Payment_Hour	      INT,
      @Payment_Minute     INT,  
	  @Customer_Id	      INT,			    
      @Payment_Id	      INT OUTPUT,
	  @Insert_Status	  INT OUTPUT
)
    
AS 
BEGIN   
  INSERT  INTO Payment    
				(  
					Payment_Status,
					Payment_Amount,
					Payment_Day,
					Payment_Mon, 
					Payment_Year,
					Payment_Hour,
					Payment_Minute,					
					Customer_Id
				)    
				VALUES  
				( 
					1,
					@Payment_Amount,
					DAY(GETDATE()),
					MONTH(GETDATE()),
					YEAR(GETDATE()),
					@Payment_Hour,
					@Payment_Minute,	
					@Customer_Id
				)  
	SET   @Payment_Id = SCOPE_IDENTITY();
	
	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  Table [dbo].[PaypalTransaction]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PaypalTransaction](
	[PaypalTransaction_Id] [int] IDENTITY(1,1) NOT NULL,
	[PaypalTransaction_ProtectionEligibility] [varchar](50) NULL,
	[PaypalTransaction_McGross] [decimal](5, 2) NULL,
	[PaypalTransaction_Charset] [varchar](50) NULL,
	[PaypalTransaction_NotifyVersion] [varchar](50) NULL,
	[PaypalTransaction_Custom] [int] NULL,
	[PaypalTransaction_PayerStatus] [varchar](50) NULL,
	[PaypalTransaction_AddressStatus] [varchar](50) NULL,
	[PaypalTransaction_PayerId] [varchar](50) NULL,
	[PaypalTransaction_FirstName] [varchar](50) NULL,
	[PaypalTransaction_LastName] [varchar](50) NULL,
	[PaypalTransaction_AddressStreet] [varchar](50) NULL,
	[PaypalTransaction_City] [varchar](50) NULL,
	[PaypalTransaction_Pincode] [int] NULL,
	[PaypalTransaction_State] [varchar](50) NULL,
	[PaypalTransaction_Country] [varchar](50) NULL,
	[PaypalTransaction_PayerEmail] [varchar](50) NULL,
	[PaypalTransaction_PaymentType] [varchar](50) NULL,
	[PaypalTransaction_PaymentDate] [varchar](50) NULL,
	[PaypalTransaction_PaymentStatus] [varchar](50) NULL,
	[PaypalTransaction_Mcfees] [varchar](50) NULL,
	[PaypalTransaction_Quantity] [int] NULL,
	[PaypalTransaction_VerifySign] [varchar](50) NULL,
	[PaypalTransaction_Transactionid] [varchar](50) NULL,
	[PaypalTransactionl_ReceiverId] [varchar](50) NULL,
	[PaypalTransaction_TransactionType] [varchar](50) NULL,
	[PaypalTransaction_ItemName] [varchar](50) NULL,
	[PaypalTransaction_ItemNumber] [varchar](50) NULL,
	[PaypalTransaction_Currency] [varchar](50) NULL,
	[PaypalTransaction_ResidenceCountry] [varchar](50) NULL,
	[PaypalTransaction_TestIPN] [varchar](50) NULL,
	[PaypalTransaction_HandlingAmount] [decimal](5, 2) NULL,
	[PaypalTransaction_TransactionSubject] [varchar](50) NULL,
	[PaypalTransaction_PaymentGross] [decimal](5, 2) NULL,
	[PaypalTransaction_Shipping] [decimal](5, 2) NULL,
	[PaypalTransaction_Recurring] [varchar](50) NULL,
	[PaypalTransaction_Reattempt] [varchar](50) NULL,
	[PaypalTransaction_RetryAt] [varchar](50) NULL,
	[PaypalTransaction_Times] [varchar](50) NULL,
	[PaypalTransaction_Username] [varchar](50) NULL,
	[PaypalTransaction_Password] [varchar](50) NULL,
	[PaypalTransaction_SubscrId] [varchar](50) NULL,
 CONSTRAINT [PK_PaypalTransaction] PRIMARY KEY CLUSTERED 
(
	[PaypalTransaction_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Trigger [Customer_UpdateBalance]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[Customer_UpdateBalance] 
ON  [dbo].[Payment]  
AFTER INSERT
AS 
BEGIN
	DECLARE		@Customer_Balance	DECIMAL(10,2),
				@PaymentAmount		DECIMAL(10,2), 
				@Customer_Id		INT,
				@Payment_Status		BIT,
				@Payment_SubscrId	VARCHAR(50);
	 
	SELECT @Customer_Id		= inserted.Customer_Id		FROM inserted;
	SELECT @PaymentAmount	= inserted.Payment_Amount	FROM inserted;
	SELECT @Payment_Status  = inserted.Payment_Status	FROM inserted;
	--SELECT @Payment_SubscrId= inserted.Payment_SubscrId FROM inserted;
	
	IF(@Payment_Status = 'True')
	BEGIN
	SELECT @Customer_Balance = Customer_Balance FROM Customer WHERE Customer_Id = @Customer_Id;
	UPDATE Customer SET Customer_Balance = @Customer_Balance+@PaymentAmount WHERE Customer_Id = @Customer_Id;
	END
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_UpdateAppointmentStatus]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_UpdateAppointmentStatus]
(
	@Appointment_Status		VARCHAR(50),
	@Appointment_Id			INT,
	@Update_Status			BIT OUTPUT
)
AS
BEGIN
		
	UPDATE  dbo.Appointment 
	SET		Appointment_Status			=		@Appointment_Status
	Where 
			Appointment_Id				=		@Appointment_Id;
			
	IF( @@ROWCOUNT > 0)
	BEGIN
		SET @Update_Status				=		1;
		
		DECLARE @UtilityProvider_Id INT;
		
		SELECT	@UtilityProvider_Id		= UtilityProvider_Id
		FROM 	Appointment 
		WHERE	Appointment_Id			= @Appointment_Id;
		
		SELECT	UtilityProvider_Id,
				UtilityProvider_Name,
				UtilityProvider_Mobile,
				UtilityProvider_Email
		FROM	UtilityProvider
		WHERE	UtilityProvider_Id		= @UtilityProvider_Id;
		
		INSERT INTO dbo.MsgStatus Values('UtilityProvider',@UtilityProvider_Id,@Appointment_Status+'by Customer',0);
	END
	ELSE
		SET @Update_Status			=		0;
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_UpdateStarttime]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_UpdateStarttime]
(
	@Appointment_StartHour		INT,
	@Appointment_StartMinute	INT,
	@Appointment_Id				INT,
	@insert_Status				INT OUTPUT
)
AS
BEGIN
	UPDATE dbo.Appointment 
	SET 
	Appointment_StartHour		=		@Appointment_StartHour, 
	Appointment_StartMinute		=		@Appointment_StartMinute
	WHERE
	 Appointment_Id				=		@Appointment_Id;
	 
	  IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_UpdateRating]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_UpdateRating]
(
	@Appointment_Rating	DECIMAL(2,1),
	@Appointment_Id		INT,
	@Insert_Status		INT OUTPUT
)
AS
BEGIN
	UPDATE dbo.Appointment 
	SET Appointment_Rating		=		@Appointment_Rating 
	WHERE Appointment_Id		=		@Appointment_Id;
	
	 IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_UpdateLike]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_UpdateLike]
(
	@Appointment_Like	BIT,
	@Appointment_Id		INT,
	@insert_Status		INT OUTPUT
)
AS
BEGIN
	UPDATE Appointment 
	SET Appointment_Like		=		@Appointment_Like 
	WHERE 
	Appointment_Id				=		@Appointment_Id;
	
	 IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_UpdateFare]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_UpdateFare]
(
	@Appointment_Fare DECIMAL(10,2),
	@Appointment_Id   INT,
	@Insert_Status    INT Output
)
AS
BEGIN
	UPDATE Appointment 
	SET Appointment_Fare		=	@Appointment_Fare 
	WHERE 
	Appointment_Id				=	@Appointment_Id;
	
	 IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_UpdateEndTime]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_UpdateEndTime]
(
	@Appointment_EndHour	INT,
	@Appointment_EndMinute	INT,
	@Appointment_Id			INT,
	@insert_Status			INT OUTPUT
)
AS
BEGIN
	UPDATE dbo.Appointment 
		SET 
			Appointment_EndHour		=	@Appointment_EndHour, 
			Appointment_EndMinute	=	@Appointment_EndMinute
		WHERE
			dbo.Appointment.Appointment_Id	=	@Appointment_Id;
	 
	 IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_GetFareCalcuDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_GetFareCalcuDetails]
(
	@Appointment_Id		INT,
	@Selected_Status	INT OUTPUT
)
AS
BEGIN
	SELECT 
		CAST (Appointment.Appointment_StartHour AS VARCHAR(5) )+ ':' + CAST ( Appointment.Appointment_StartMinute AS VARCHAR(5))+ ':' +'00' as Appointment_StartTime,

		CAST (Appointment.Appointment_EndHour AS VARCHAR(5) )+ ':' + CAST ( Appointment.Appointment_EndMinute AS VARCHAR(5))+ ':' +'00' as Appointment_EndTime,
		
		UtilityProvider.UtilityProvider_RatePerHour
 
	FROM 
		Appointment 
		INNER JOIN 
		UtilityProvider
		 
		ON Appointment.UtilityProvider_Id	=	UtilityProvider.UtilityProvider_Id  
		WHERE Appointment.Appointment_Id	=	@Appointment_Id;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
	
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_GetDetails]
(
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	SELECT 
			Appointment_Id,
			Appointment_Issue,
			Appointment_IssueIMG,
			dbo.datefunction(Appointment_RegDay,Appointment_RegMon,Appointment_RegYear)As Appointment_RegDate,
			Appointment_Location,
			Appointment_Address,
			CAST (Appointment.Appointment_Hour AS VARCHAR(5) )+ ':' + CAST ( Appointment.Appointment_Minute AS VARCHAR(5))+ ':' +'00' as Appointment_Time,
			dbo.datefunction(Appointment_Day,Appointment_Month,Appointment_Year)As Appointment_Date,
			Appointment_Status,
			Appointment_VoiceURL,
			CAST (Appointment.Appointment_StartHour AS VARCHAR(5) )+ ':' + CAST ( Appointment.Appointment_StartMinute AS VARCHAR(5))+ ':' +'00' as Appointment_StartTime,
			CAST (Appointment.Appointment_EndHour AS VARCHAR(5) )+ ':' + CAST ( Appointment.Appointment_EndMinute AS VARCHAR(5))+ ':' +'00' as Appointment_EndTime,
			Appointment_Fare,
			Appointment_Like,
			Appointment_Rating,
			Appointment_Latitude,
			Appointment_Longitude
	FROM dbo.Appointment;
	
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
	
END
GO
/****** Object:  StoredProcedure [dbo].[Appointment_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Appointment_AddDetails]
(
	@Appointment_Issue				VARCHAR(50),
	@Appointment_IssueIMG			VARCHAR(50),
	@Appointment_Location			VARCHAR(50),
	@Appointment_Address			VARCHAR(150),
	@Appointment_Hour				INT,
	@Appointment_Minute				INT,
	@Appointment_Day				INT,
	@Appointment_Month				INT,
	@Appointment_Year				INT,
	@Appointment_VoiceURL			VARCHAR(50),
	@Appointment_Latitude			VARCHAR(50),
	@Appointment_Longitude			VARCHAR(50),
	@UtilityProvider_Id				INT,
	@Customer_Id					INT,
	@Appointment_id					INT OUTPUT,
	@insert_Status					INT OUTPUT
)
AS
BEGIN
	INSERT INTO dbo.Appointment
	(
		Appointment_Issue,
		Appointment_IssueIMG,
		Appointment_RegDay,
		Appointment_RegMon,
		Appointment_RegYear,
		Appointment_Location,
		Appointment_Address,
		Appointment_Hour,
		Appointment_Minute,
		Appointment_Day,
		Appointment_Month,
		Appointment_Year,
		Appointment_Status,
		Appointment_VoiceURL,
		Appointment_Latitude,
		Appointment_Longitude,
		Customer_Id,
		UtilityProvider_Id
	)
	VALUES
	(
		@Appointment_Issue,
		@Appointment_IssueIMG,
		Day(getdate()),
		Month(getdate()),
		Year(getdate()),
		@Appointment_Location,
		@Appointment_Address,
		@Appointment_Hour,
		@Appointment_Minute,
		@Appointment_Day,		
		@Appointment_Month,
		@Appointment_Year,
		'Pending',
		@Appointment_VoiceURL,
		@Appointment_Latitude,
		@Appointment_Longitude,
		@Customer_Id,
		@UtilityProvider_Id
	)
	
	SET @Appointment_id		=	SCOPE_IDENTITY();
	IF( @@ROWCOUNT > 0)
	BEGIN 
		SET		@Insert_Status			=		1;
		SELECT 	UtilityProvider_Id,
				UtilityProvider_Name,
				UtilityProvider_Mobile,
				UtilityProvider_Email
		FROM	UtilityProvider
		WHERE	UtilityProvider_Id		= @UtilityProvider_Id
	END
	ELSE
		SET @Insert_Status			=		0
	PRINT @insert_Status
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_AppointmentReschedule]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Customer_AppointmentReschedule]
(
	@Appointment_Id				INT,
	@Customer_Id				INT,
	@UtilityProvider_Id			INT,
	@Appointment_Location		VARCHAR(50),
	@Appointment_Address		VARCHAR(150),
	@Appointment_Hour			INT,
	@Appointment_Minute			INT,
	@Appointment_Day			INT,
    @Appointment_Month			INT,
    @Appointment_Year			INT,
    @Appointment_VoiceURL		VARCHAR(50),
    @Appointment_Latitude		VARCHAR(50),
    @Appointment_Longitude		VARCHAR(50),
    @Reschedule_Status			INT OUTPUT,
	@ReAppointment_Id			INT OUTPUT
)
AS
BEGIN
	DECLARE @Provider_Id			INT,
			@Appointment_Issue		VARCHAR(50),
			@Appointment_IssueIMG	VARCHAR(50),
			@Appointment_RegDay		INT,
			@Appointment_RegMon		INT,
			@Appointment_RegYear	INT;
	
	SELECT	@Provider_Id			= UtilityProvider_Id ,
			@Appointment_Issue		= Appointment_Issue,
			@Appointment_IssueIMG	= Appointment_IssueIMG,
			@Appointment_RegDay		= Appointment_RegDay,
			@Appointment_RegMon		= Appointment_RegMon,
			@Appointment_RegYear	= Appointment_RegYear
	FROM	Appointment 
	WHERE	Appointment_Id			= @Appointment_Id 
	AND		Customer_Id				= @Customer_Id;
	
	IF(@Provider_Id = @UtilityProvider_Id)
	BEGIN
		UPDATE Appointment 
		SET 
			Appointment_Location	= @Appointment_Location,
			Appointment_Address		= @Appointment_Address,
			Appointment_Hour		= @Appointment_Hour,
			Appointment_Minute		= @Appointment_Minute,
			Appointment_Day			= @Appointment_Day,
			Appointment_Month		= @Appointment_Month,
			Appointment_Year		= @Appointment_Year,
			Appointment_Status		= 'Pending',
			Appointment_VoiceURL	= @Appointment_VoiceURL,
			Appointment_Latitude	= @Appointment_Latitude,
			Appointment_Longitude	= @Appointment_Longitude
		WHERE 
			Appointment_Id			= @Appointment_Id 
		AND Customer_Id				= @Customer_Id;
		
		SET @ReAppointment_Id = @Appointment_Id;
	END
	ELSE
	BEGIN
		DELETE FROM Appointment WHERE Appointment_Id = @Appointment_Id AND Customer_Id = @Customer_Id;
		
		INSERT INTO dbo.Appointment
		(
			Appointment_Issue,
			Appointment_IssueIMG,
			Appointment_RegDay,
			Appointment_RegMon,
			Appointment_RegYear,
			Appointment_Location,
			Appointment_Address,
			Appointment_Hour,
			Appointment_Minute,
			Appointment_Day,
			Appointment_Month,
			Appointment_Year,
			Appointment_Status,
			Appointment_VoiceURL,
			Appointment_Latitude,
			Appointment_Longitude,
			Customer_Id,
			UtilityProvider_Id
		)
		VALUES
		(
			@Appointment_Issue,
			@Appointment_IssueIMG,
			@Appointment_RegDay,
			@Appointment_RegMon,
			@Appointment_RegYear,
			@Appointment_Location,
			@Appointment_Address,
			@Appointment_Hour,
			@Appointment_Minute,
			@Appointment_Day,		
			@Appointment_Month,
			@Appointment_Year,
			'Pending',
			@Appointment_VoiceURL,
			@Appointment_Latitude,
			@Appointment_Longitude,
			@Customer_Id,
			@UtilityProvider_Id
		)
		SET @ReAppointment_Id		= SCOPE_IDENTITY();
	END
	IF( @@ROWCOUNT > 0)
	BEGIN
		SET @Reschedule_Status	=	1;
		SELECT	UtilityProvider_Id,
				UtilityProvider_Name,
				UtilityProvider_Mobile,
				UtilityProvider_Email
		FROM	UtilityProvider
		WHERE	UtilityProvider_Id		= @UtilityProvider_Id;
		INSERT INTO dbo.MsgStatus Values('UtilityProvider',@UtilityProvider_Id,'Appointment Reschedule by Customer',0);
	END
	ELSE
		SET @Reschedule_Status	=	0;
END
GO
/****** Object:  Table [dbo].[Compliant]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Compliant](
	[Compliant_Id] [int] IDENTITY(1,1) NOT NULL,
	[Compliant_Heading] [varchar](50) NULL,
	[Compliant_Desc] [varchar](250) NULL,
	[Compliant_Day] [int] NULL,
	[Compliant_Mon] [int] NULL,
	[Compliant_Year] [int] NULL,
	[Compliant_Status] [varchar](50) NULL,
	[Appointment_Id] [int] NULL,
 CONSTRAINT [PK_Compliant] PRIMARY KEY CLUSTERED 
(
	[Compliant_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_GetAddress]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityProvider_GetAddress]
(
	@UtilityProvider_Id INT,
	@Selected_Status	INT OUTPUT
)
AS
BEGIN
	SELECT 
		UtilityProvider.UtilityProvider_Id,
		UtilityProvider_Name, 
		UtilityProvider_Location, 
		UtilityProvider_Address,
		UtilityProvider_Latitude, 
		UtilityProvider_Longitude,
		Appointment_Location,
		Appointment_Address,
		Appointment_Latitude,
		Appointment_Longitude
	FROM
		UtilityProvider
		LEFT OUTER JOIN
		Appointment ON Appointment.UtilityProvider_Id = UtilityProvider.UtilityProvider_Id
	WHERE
		UtilityProvider.UtilityProvider_Id = @UtilityProvider_Id;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
			 
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_UpdateAppointmentStatus]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityProvider_UpdateAppointmentStatus]
(
	@Appointment_Status			VARCHAR(50),
	@Appointment_Id				INT,
	@Appointment_EndHour		INT,
	@Appointment_EndMinute		INT,
	@UtilityProvider_Id			INT,
	@Update_Status				BIT OUTPUT
)
AS
BEGIN
	
	
	UPDATE  dbo.Appointment 
	SET		Appointment_Status		=		@Appointment_Status,
			Appointment_EndHour		=		@Appointment_EndHour,
			Appointment_EndMinute	=		@Appointment_EndMinute
	Where 
			Appointment_Id			=		@Appointment_Id;
			
	IF( @@ROWCOUNT > 0)
	BEGIN
		SET		@Update_Status		=		1;
		DECLARE @Customer_Id				INT;
		SELECT	@Customer_Id		=		Customer_Id 
		FROM	Appointment 
		Where 	Appointment_Id		=		@Appointment_Id 
		AND		UtilityProvider_Id	=		@UtilityProvider_Id;
		SELECT	Customer_Id,
				Customer_Name,
				Customer_Email,
				Customer_Mobile 
		FROM	Customer 
		WHERE 	Customer_Id			= @Customer_Id;
		 
		INSERT INTO dbo.MsgStatus Values('Customer',@Customer_Id,@Appointment_Status +'By UtilityProvider',0); 
	END
	ELSE
		SET		@Update_Status		=		0;
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_CancelAppointment]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityProvider_CancelAppointment]
(
	@Appointment_Id			INT,
	@UtilityProvider_Id		INT,
	@Update_Status			BIT OUTPUT
)
AS
BEGIN
	
	UPDATE Appointment SET Appointment_Status ='Canceled By UtilityProvider'WHERE Appointment_Id = @Appointment_Id AND UtilityProvider_Id = @UtilityProvider_Id;
	
	IF( @@ROWCOUNT	>	0 )
	BEGIN
		SET		@Update_Status		=		1;
		DECLARE @Customer_Id				INT;
		SELECT	@Customer_Id		=		Customer_Id FROM Appointment Where 	Appointment_Id = @Appointment_Id AND UtilityProvider_Id	= @UtilityProvider_Id;
		SELECT	Customer_Id,
				Customer_Name,
				Customer_Email,
				Customer_Mobile 
		FROM	Customer 
		WHERE 	Customer_Id			= @Customer_Id;
		INSERT INTO dbo.MsgStatus Values('Customer',@Customer_Id,'Appointment Canceled By UtilityProvider',0); 
	END
	ELSE
		SET @Update_Status = 0;
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_GetAddress]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Selected_Status INT
--EXEC Customer_GetAddress 1,@Selected_Status OUT
CREATE PROCEDURE [dbo].[Customer_GetAddress]
(
	@Customer_Id		INT,
	@Selected_Status	INT OUTPUT
)
AS
BEGIN
	SELECT DISTINCT
		Customer.Customer_Id,
		Customer_Name,
		Customer_Location,
		Customer_Address1,
		Customer_Address2,
		Customer_Longitude,
		Customer_Latitude
		--Appointment_Location,
		--Appointment_Address,
		--Appointment_Latitude,
		--Appointment_Longitude		
	FROM 
		 Customer LEFT OUTER JOIN  Appointment 
		 ON dbo.Customer.Customer_Id		=		dbo.Appointment.Customer_Id 
		
	WHERE dbo.Customer.Customer_Id			=		@Customer_Id;

	IF( @@ROWCOUNT > 0)
			SET @Selected_Status			=		1
			ELSE
			SET @Selected_Status			=		0	
	
END
GO
/****** Object:  Table [dbo].[Review]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Review](
	[Review_Id] [int] IDENTITY(1,1) NOT NULL,
	[Review_Heading] [varchar](50) NULL,
	[Review_Desc] [varchar](max) NULL,
	[Review_Day] [int] NULL,
	[Review_Mon] [int] NULL,
	[Review_Year] [int] NULL,
	[Review_Active] [bit] NULL,
	[Appointment_Id] [int] NULL,
 CONSTRAINT [PK_Review] PRIMARY KEY CLUSTERED 
(
	[Review_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[UtilityCompliantType_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @UtilityCompliantTypeIdArray VARCHAR(MAX), @UtilityCompliantTypeArray				VARCHAR(MAX);
--EXECUTE UtilityCompliantType_GetDetails '1,2',@UtilityCompliantTypeIdArray OUTPUT,@UtilityCompliantTypeIdArray OUTPUT;

CREATE PROCEDURE [dbo].[UtilityCompliantType_GetDetails]
(
	@UtilityTypeIdArray         VARCHAR(MAX),
	 @Selected_Status			INT OUTPUT
)
AS
BEGIN 
DECLARE @X xml

SELECT @X = CONVERT(xml,'<root><s>' + REPLACE(@UtilityTypeIdArray,',','</s><s>') + '</s></root>');

 SELECT  
   UtilityCompliantType_Id,UtilityCompliantType_Type
 FROM 
   UtilityCompliantType
 where 
   UtilityType_Id IN( SELECT [Value] = T.c.value('.','varchar(20)') 
 FROM 
   @X.nodes('/root/s') T(c))

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
 
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityCompliantType_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityCompliantType_AddDetails]
(
	@UtilityCompliantType_Type	VARCHAR(50),
	@UtilityType_Id				INT,
	@UtilityCompliantType_Id	INT OUTPUT,
	@Insert_Status				INT OUTPUT
)
AS
BEGIN

	DECLARE @Count_Id INT;
	SELECT @Count_Id = COUNT(UtilityCompliantType_Id)FROM UtilityCompliantType WHERE UtilityCompliantType_Type = @UtilityCompliantType_Type;
	
	IF(@Count_Id = 0)
	BEGIN
		INSERT INTO UtilityCompliantType 
				(
					UtilityCompliantType_Type ,
					UtilityType_Id
				)
				VALUES
				(
					@UtilityCompliantType_Type,
					@UtilityType_Id
				);
	
		SET @UtilityCompliantType_Id = SCOPE_IDENTITY();
	END
	IF(@@ROWCOUNT > 0)
		SET @Insert_Status			=		1;
		ELSE
		SET @Insert_Status			=		0;
END
GO
/****** Object:  Table [dbo].[UtilityCompliantSpec]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UtilityCompliantSpec](
	[UtilityCompliantSpec_Id] [int] IDENTITY(1,1) NOT NULL,
	[UtilityCompliantSpec_Name] [varchar](50) NULL,
	[UtilityCompliantType_Id] [int] NULL,
 CONSTRAINT [PK_UtilityCompliantSpec] PRIMARY KEY CLUSTERED 
(
	[UtilityCompliantSpec_Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[UtilityCompliantSpec_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityCompliantSpec_GetDetails]
(
	@UtilityCompliantTypeIdArray	VARCHAR(MAX),
	@Selected_Status				INT OUTPUT
)
AS
BEGIN
DECLARE @X xml

SELECT @X = CONVERT(xml,'<root><s>' + REPLACE(@UtilityCompliantTypeIdArray,',','</s><s>') + '</s></root>');
	SELECT 
		UtilityCompliantSpec_Id,
		UtilityCompliantSpec_Name
    FROM 
	 dbo.UtilityCompliantSpec 
	WHERE 
	 UtilityCompliantType_Id IN( SELECT [Value] = T.c.value('.','varchar(20)') 
    FROM 
     @X.nodes('/root/s') T(c))

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityCompliantSpec_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UtilityCompliantSpec_AddDetails]
(
	@UtilityCompliantSpec_Name varchar(50),
	@UtilityCompliantType_Id int,
	@UtilityCompliantSpec_id int output,
	@insert_Status int output
)
AS
BEGIN
	DECLARE @Count_Id INT;
	SELECT @Count_Id = COUNT(UtilityCompliantSpec_id) FROM UtilityCompliantSpec WHERE UtilityCompliantSpec_Name = @UtilityCompliantSpec_Name;
	
	IF (@Count_Id = 0)
	BEGIN
		INSERT INTO dbo.UtilityCompliantSpec
					(
						UtilityCompliantSpec_Name,
						UtilityCompliantType_Id
					)
					VALUES 
					(
						@UtilityCompliantSpec_Name,
						@UtilityCompliantType_Id
					);
		SET @UtilityCompliantSpec_id = SCOPE_IDENTITY();
	END
	IF( @@ROWCOUNT > 0 )
		SET @Insert_Status			=		1;
		ELSE
		SET @Insert_Status			=		0;

END
GO
/****** Object:  StoredProcedure [dbo].[Compliant_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Compliant_GetDetails]
(
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	SELECT 
		Compliant_Id, 
		Compliant_Heading, 
		Compliant_Desc, 
		dbo.DateFunction(Compliant_Day,Compliant_Mon,Compliant_Year) As Compliant_Date, 
		Compliant_Status 
	FROM dbo.Compliant;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[Compliant_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Compliant_AddDetails]
(
	@Compliant_Heading	VARCHAR(50),
	@Compliant_Desc		VARCHAR(250),
	@Compliant_Status	VARCHAR(50),
	@Appointment_Id		INT,
	@Compliant_Id		INT OUTPUT,
	@Insert_Status		INT OUTPUT
)
AS
BEGIN
	INSERT INTO dbo.Compliant
				(
					Compliant_Heading,
					Compliant_Desc, 
					Compliant_Day, 
					Compliant_Mon, 
					Compliant_Year, 
					Compliant_Status, 
					Appointment_Id
				) 
				VALUES 
				(
					@Compliant_Heading ,
					@Compliant_Desc ,
					DAY(GETDATE()),
					MONTH(GETDATE()),
					YEAR(GETDATE()),
					@Compliant_Status ,
					@Appointment_Id 
				)
	
	SET @Compliant_Id = SCOPE_IDENTITY();
	 IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[PaypalTransaction_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[PaypalTransaction_AddDetails]
(
	@PaypalTransaction_ProtectionEligibility		VARCHAR(50),
	@PaypalTransaction_McGross						DECIMAL,
	@PaypalTransaction_Charset						VARCHAR(50),
	@PaypalTransaction_NotifyVersion				VARCHAR(50),
	@PaypalTransaction_Custom						VARCHAR(50),
	@PaypalTransaction_PayerStatus					VARCHAR(50),
	@PaypalTransaction_AddressStatus				VARCHAR(50),
	@PaypalTransaction_PayerId						VARCHAR(50),
	@PaypalTransaction_FirstName					VARCHAR(50),
	@PaypalTransaction_LastName						VARCHAR(50),
	@PaypalTransaction_AddressStreet				VARCHAR(50),
	@PaypalTransaction_City							VARCHAR(50),
	@PaypalTransaction_Pincode						INT,
	@PaypalTransaction_State						VARCHAR(50),
	@PaypalTransaction_Country						VARCHAR(50),
	@PaypalTransaction_PayerEmail					VARCHAR(50),
	@PaypalTransaction_PaymentType					VARCHAR(50),
	@PaypalTransaction_PaymentDate					VARCHAR(50),
	@PaypalTransaction_PaymentStatus				VARCHAR(50),
	@PaypalTransaction_Mcfees						VARCHAR(50),
	@PaypalTransaction_Quantity						INT,
	@PaypalTransaction_VerifySign					VARCHAR(50),
	@PaypalTransaction_Transactionid				VARCHAR(50),
	@PaypalTransactionl_ReceiverId					VARCHAR(50),
	@PaypalTransaction_TransactionType				VARCHAR(50),
	@PaypalTransaction_ItemName						VARCHAR(50),
	@PaypalTransaction_ItemNumber					VARCHAR(50),
	@PaypalTransaction_Currency						VARCHAR(50),
	@PaypalTransaction_ResidenceCountry				VARCHAR(50),
	@PaypalTransaction_TestIPN						VARCHAR(50),
	@PaypalTransaction_HandlingAmount				DECIMAL(5,2),
	@PaypalTransaction_TransactionSubject			VARCHAR(50),
	@PaypalTransaction_PaymentGross					VARCHAR(50),
	@PaypalTransaction_Shipping						DECIMAL(5,2),
	@PaypalTransaction_Recurring					VARCHAR(50),
	@PaypalTransaction_Reattempt					VARCHAR(50),
	@PaypalTransaction_RetryAt						VARCHAR(50),
	@PaypalTransaction_Times						VARCHAR(50),
	@PaypalTransaction_Username						VARCHAR(50),
	@PaypalTransaction_Password						VARCHAR(50),
	@PaypalTransaction_SubscrId						VARCHAR(50),
	@Insert_Status									INT OUTPUT
)
AS
BEGIN
	INSERT INTO dbo.PaypalTransaction
	(
		PaypalTransaction_ProtectionEligibility,
		PaypalTransaction_McGross,
		PaypalTransaction_Charset,
		PaypalTransaction_NotifyVersion,
		PaypalTransaction_Custom,
		PaypalTransaction_PayerStatus,
		PaypalTransaction_AddressStatus,
		PaypalTransaction_PayerId,
		PaypalTransaction_FirstName,
		PaypalTransaction_LastName,
		PaypalTransaction_AddressStreet,
		PaypalTransaction_City,
		PaypalTransaction_Pincode,
		PaypalTransaction_State,
		PaypalTransaction_Country,
		PaypalTransaction_PayerEmail,
		PaypalTransaction_PaymentType,
		PaypalTransaction_PaymentDate,
		PaypalTransaction_PaymentStatus,
		PaypalTransaction_Mcfees,
		PaypalTransaction_Quantity,
		PaypalTransaction_VerifySign,
		PaypalTransaction_Transactionid,
		PaypalTransactionl_ReceiverId,
		PaypalTransaction_TransactionType,
		PaypalTransaction_ItemName,
		PaypalTransaction_ItemNumber,
		PaypalTransaction_Currency,
		PaypalTransaction_ResidenceCountry,
		PaypalTransaction_TestIPN,
		PaypalTransaction_HandlingAmount,
		PaypalTransaction_TransactionSubject,
		PaypalTransaction_PaymentGross,
		PaypalTransaction_Shipping,
		PaypalTransaction_Recurring,
		PaypalTransaction_Reattempt,
		PaypalTransaction_RetryAt,
		PaypalTransaction_Times,
		PaypalTransaction_Username,
		PaypalTransaction_Password ,
		PaypalTransaction_SubscrId
	)
	VALUES
	(
		@PaypalTransaction_ProtectionEligibility,
		@PaypalTransaction_McGross,
		@PaypalTransaction_Charset,
		@PaypalTransaction_NotifyVersion,
		@PaypalTransaction_Custom,
		@PaypalTransaction_PayerStatus,
		@PaypalTransaction_AddressStatus,
		@PaypalTransaction_PayerId,
		@PaypalTransaction_FirstName,
		@PaypalTransaction_LastName,
		@PaypalTransaction_AddressStreet,
		@PaypalTransaction_City,
		@PaypalTransaction_Pincode,
		@PaypalTransaction_State,
		@PaypalTransaction_Country,
		@PaypalTransaction_PayerEmail,
		@PaypalTransaction_PaymentType,
		@PaypalTransaction_PaymentDate,
		@PaypalTransaction_PaymentStatus,
		@PaypalTransaction_Mcfees,
		@PaypalTransaction_Quantity,
		@PaypalTransaction_VerifySign,
		@PaypalTransaction_Transactionid,
		@PaypalTransactionl_ReceiverId,
		@PaypalTransaction_TransactionType,
		@PaypalTransaction_ItemName,
		@PaypalTransaction_ItemNumber,
		@PaypalTransaction_Currency,
		@PaypalTransaction_ResidenceCountry,
		@PaypalTransaction_TestIPN,
		@PaypalTransaction_HandlingAmount,
		@PaypalTransaction_TransactionSubject,
		@PaypalTransaction_PaymentGross,
		@PaypalTransaction_Shipping,
		@PaypalTransaction_Recurring,
		@PaypalTransaction_Reattempt,
		@PaypalTransaction_RetryAt,
		@PaypalTransaction_Times,
		@PaypalTransaction_Username,
		@PaypalTransaction_Password ,
		@PaypalTransaction_SubscrId
	)
	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
	END
GO
/****** Object:  Trigger [Payment_UpdateDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[Payment_UpdateDetails] 
ON  [dbo].[PaypalTransaction]  
AFTER INSERT
AS 
BEGIN
	DECLARE @Currency_Name			VARCHAR(50),
			@Currency_Id			SMALLINT,
			@TransactionId			VARCHAR(50),
			@Payment_Status			VARCHAR(50),
			@PaymentAmount			DECIMAL(10,2),
			@CustomValue			INT,
			@SubscrId				VARCHAR(50),
			@RowCount				INT,
			@PaypalTransaction_Id	INT,
			@Payment_Id				INT,
			@Customer_Id			INT,
			@TransactionType		VARCHAR(50);
	
	SET 	@Currency_Id		  =	 0;
	SELECT  @TransactionId		  =  inserted.PaypalTransaction_Transactionid		FROM	inserted;
	SELECT  @Payment_Status		  =  inserted.PaypalTransaction_PaymentStatus		FROM	inserted;
	SELECT  @PaymentAmount		  =  inserted.PaypalTransaction_PaymentGross		FROM	inserted;
	SELECT  @TransactionType      =  inserted.PaypalTransaction_TransactionType     FROM	inserted;
	SELECT  @CustomValue		  =  inserted.PaypalTransaction_Custom				FROM	inserted;		    
	SELECT 	@Currency_Name		  =  inserted.PaypalTransaction_Currency			FROM	inserted;	
	SELECT  @PaypalTransaction_Id =  inserted.PaypalTransaction_Id					FROM	inserted;															
	SELECT  @SubscrId			  =  inserted.PaypalTransaction_SubscrId			FROM	inserted;	
	SELECT 	@Currency_Id		  =  Currency_Id  FROM	Currency WHERE	Currency_Name =	 @Currency_Name;		
	SELECT	@RowCount			  =	 COUNT(Payment_Id),@Payment_Id = Payment_Id	FROM Payment WHERE	Payment_SubscrId =	@SubscrId GROUP BY Payment_Id	
	
	IF @RowCount  >  0	--If Row already   exits in the Payment table 
	BEGIN
		SELECT @Customer_Id= Customer_Id FROM Payment WHERE Payment_SubscrId = @SubscrId
		IF(@TransactionType ='subscr_payment' AND @PaymentAmount IS NOT NULL)
		BEGIN
			--If CustomValue of Paypal Table not correct update with the correct one
			UPDATE dbo.PaypalTransaction SET  PaypalTransaction_Custom = @Payment_Id WHERE  PaypalTransaction_Id = @PaypalTransaction_Id
			--Reset payment flag to true if it is false due to Cancel payment
			UPDATE Payment SET  Payment_Status ='True',Payment_Amount = @PaymentAmount  WHERE Customer_Id =@Customer_Id 
		END
		ELSE --If Paypal row payment status is false
		BEGIN
			UPDATE Payment SET  Payment_Status ='False'  WHERE Customer_Id =@Customer_Id 
		END
	END
	ELSE
	BEGIN
		IF @TransactionId IS NOT NULL AND @PaymentAmount IS NOT NULL --Payment for the first time in Paypal
		BEGIN			
			UPDATE  
				Payment 
			SET 
				Currency_Id             =	@Currency_Id,
				Payment_Status			=	'True',
				Payment_Amount			=	@PaymentAmount,	   
				Payment_SubscrId        =	@SubscrId
			WHERE		   
				Payment_Id		        =	@CustomValue 
		END
	END				
END
GO
/****** Object:  StoredProcedure [dbo].[Review_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Review_GetDetails]
(
	@Selected_Status			INT OUTPUT
)
AS
BEGIN
	SELECT 
		Review_Id,
		Review_Heading,
		Review_Desc,
		dbo.DateFunction(Review_Day,Review_Mon,Review_Year)AS Review_Date,
		Review_Active
	FROM dbo.Review;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[Review_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Review_AddDetails]
(
	@Review_Heading	VARCHAR(50),
	@Review_Desc	VARCHAR(250),
	@Review_Active	BIT,
	@Appointment_Id INT,
	@Review_Id		INT OUTPUT,
	@insert_Status	INT OUTPUT
)
AS
BEGIN
	INSERT INTO dbo.Review
				(
					Review_Heading,
					Review_Desc,
					Review_Day,
					Review_Mon,
					Review_Year,
					Review_Active,
					Appointment_Id
				)
				values
				(
					@Review_Heading,
					@Review_Desc,
					DAY(GETDATE()),
					MONTH(GETDATE()),
					YEAR(GETDATE()),
					@Review_Active,
					@Appointment_Id
				);
		
		SET @Review_Id = SCOPE_IDENTITY();
		
		IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  Table [dbo].[ProviderCompliantSpec]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProviderCompliantSpec](
	[ProviderCompliantSpec_id] [int] IDENTITY(1,1) NOT NULL,
	[UtilityProvider_Id] [int] NULL,
	[UtilityCompliantSpec_Id] [int] NULL,
 CONSTRAINT [PK_ProviderCompliantSpec] PRIMARY KEY CLUSTERED 
(
	[ProviderCompliantSpec_id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[ProviderCompliantSpec_AddDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ProviderCompliantSpec_AddDetails]
(
    @UtilityProviderIdArray                 VARCHAR(MAX),
	@UtilityCompliantSpecIdArray            VARCHAR(MAX),
    @Insert_Status                          INT OUTPUT
)
AS
BEGIN

 DECLARE @X xml
 SELECT @X = CONVERT(xml,'<root><s>' + REPLACE(@UtilityCompliantSpecIdArray,',','</s><s>') + '</s></root>')
 
 DECLARE @Y xml
 SELECT @Y = CONVERT(xml,'<root><s>' + REPLACE( @UtilityProviderIdArray,',','</s><s>') + '</s></root>')
 
 
 
 INSERT INTO ProviderCompliantSpec(UtilityCompliantSpec_Id,UtilityProvider_Id)
 SELECT 
  UtilityCompliantSpec_Id = T.C.value('.','VARCHAR(20)'),
  UtilityProvider_Id = S.D.value('.','VARCHAR(20)')  
 FROM 
  @X.nodes('/root/s') T(C),
  @Y.nodes('/root/s') S(D)
 

	IF( @@ROWCOUNT > 0)
		SET @Insert_Status			=		1
	ELSE
		SET @Insert_Status			=		0
END
GO
/****** Object:  View [dbo].[GetAppointmentDetails]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[GetAppointmentDetails]
AS
SELECT  dbo.Customer.Customer_Name, 
		dbo.Appointment.Appointment_Id, 
		dbo.Appointment.Appointment_Location, 
		dbo.Appointment.Appointment_Address, 
		dbo.TimeFunction(Appointment.Appointment_Hour, Appointment.Appointment_Minute) AS   Appointment_Time,
		dbo.DateFunction(Appointment_Day,Appointment_Month,Appointment_Year) AS Appointment_Date,
		dbo.Appointment.Appointment_Status, 
		dbo.Appointment.Appointment_Latitude, 
		dbo.Appointment.Appointment_Longitude, 
		dbo.Appointment.Customer_Id, 
		dbo.Appointment.UtilityProvider_Id, 
		dbo.UtilityProvider.UtilityProvider_Name, 
		dbo.UtilityType.UtilityType_Name, 
		dbo.Appointment.Appointment_Issue
		
FROM    dbo.UtilityCompliantType 
		LEFT OUTER JOIN
        dbo.UtilityType ON dbo.UtilityCompliantType.UtilityType_Id = dbo.UtilityType.UtilityType_Id 
        LEFT OUTER JOIN
		dbo.UtilityCompliantSpec ON dbo.UtilityCompliantType.UtilityCompliantType_Id = dbo.UtilityCompliantSpec.UtilityCompliantType_Id 
		LEFT OUTER JOIN
		dbo.ProviderCompliantSpec ON dbo.UtilityCompliantSpec.UtilityCompliantSpec_Id = dbo.ProviderCompliantSpec.UtilityCompliantSpec_Id 
		LEFT OUTER JOIN
		dbo.Appointment 
		LEFT OUTER JOIN
		dbo.Customer ON dbo.Appointment.Customer_Id = dbo.Customer.Customer_Id 
		LEFT OUTER JOIN
		dbo.UtilityProvider ON dbo.Appointment.UtilityProvider_Id = dbo.UtilityProvider.UtilityProvider_Id ON 
                      dbo.ProviderCompliantSpec.UtilityProvider_Id = dbo.UtilityProvider.UtilityProvider_Id
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[65] 4[4] 2[8] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Appointment"
            Begin Extent = 
               Top = 9
               Left = 267
               Bottom = 462
               Right = 479
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Customer"
            Begin Extent = 
               Top = 13
               Left = 27
               Bottom = 342
               Right = 236
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UtilityProvider"
            Begin Extent = 
               Top = 13
               Left = 509
               Bottom = 332
               Right = 733
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UtilityType"
            Begin Extent = 
               Top = 194
               Left = 1089
               Bottom = 285
               Right = 1262
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UtilityCompliantType"
            Begin Extent = 
               Top = 147
               Left = 792
               Bottom = 251
               Right = 1009
            End
            DisplayFlags = 344
            TopColumn = 0
         End
         Begin Table = "UtilityCompliantSpec"
            Begin Extent = 
               Top = 16
               Left = 1083
               Bottom = 124
               Right = 1302
            End
            DisplayFlags = 344
            TopColumn = 0
         End
         Begin Table = "ProviderCompliantSpec"
            Begin Extent = 
               Top = 3
               Left = 822
               Bottom = 107
               Ri' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'GetAppointmentDetails'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'ght = 1035
            End
            DisplayFlags = 344
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'GetAppointmentDetails'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'GetAppointmentDetails'
GO
/****** Object:  View [dbo].[ViewGetProviderAvailability]    Script Date: 11/03/2015 12:00:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[ViewGetProviderAvailability]
AS
SELECT  dbo.UtilityProvider.UtilityProvider_Id, 
		dbo.UtilityProvider.UtilityProvider_Name, 
		dbo.UtilityProvider.UtilityProvider_Mobile, 
		dbo.UtilityProvider.UtilityProvider_Email, 
        dbo.UtilityProvider.UtilityProvider_Password, 
        dbo.UtilityProvider.UtilityProvider_Location, 
        dbo.UtilityProvider.UtilityProvider_Address, 
		dbo.UtilityProvider.UtilityProvider_ImgURL, 
		dbo.UtilityProvider.UtilityProvider_Active, 
		dbo.DateFunction(dbo.UtilityProvider.UtilityProvider_RegDay,dbo.UtilityProvider.UtilityProvider_RegMon, dbo.UtilityProvider.UtilityProvider_RegYear) AS UtilityProvider_RegDate, 
		dbo.UtilityProvider.UtilityProvider_RatePerHour, 
        dbo.UtilityProvider.UtilityProvider_Experience,
        dbo.UtilityProvider.UtilityProvider_FixziRating, 
        dbo.UtilityProvider.UtilityProvider_Latitude, 
		dbo.UtilityProvider.UtilityProvider_Longitude, 
		dbo.UDays.UDays_Name, 
		dbo.TimeFunction(ProviderAvailability.ProviderAvailability_FromHour, ProviderAvailability.ProviderAvailability_FromMin) AS   AvailabilityFromTime,
		dbo.TimeFunction(ProviderAvailability.ProviderAvailability_ToHour, ProviderAvailability.ProviderAvailability_ToMin) AS   AvailabilityToTime,				
		dbo.Appointment.Appointment_Id,
		dbo.TimeFunction(Appointment.Appointment_Hour, Appointment.Appointment_Minute) AS   AppointmentFromTime,
		dbo.TimeFunction(Appointment.Appointment_EndHour, Appointment.Appointment_EndMinute) AS   AppointmentToTime,			
		dbo.UtilityType.UtilityType_Name, 
		dbo.UtilityArea.UtilityArea_Name, 
		dbo.UtilityCompliantType.UtilityCompliantType_Type, 
		dbo.UtilityCompliantSpec.UtilityCompliantSpec_Name, 
		UtilityType.UtilityType_Id, 
		UtilityArea.UtilityArea_Id, 
		UtilityCompliantType.UtilityCompliantType_Id, 
		UtilityCompliantSpec.UtilityCompliantSpec_Id, 
		dbo.DateFunction(Appointment_Day,Appointment_Month,Appointment_Year) AS Appointment_Date
FROM         
		dbo.UtilityProvider 
		LEFT OUTER JOIN
		dbo.ProviderArea			ON dbo.ProviderArea.UtilityProvider_Id = dbo.UtilityProvider.UtilityProvider_Id 
		LEFT OUTER JOIN
        dbo.UtilityArea				ON dbo.ProviderArea.UtilityArea_Id = dbo.UtilityArea.UtilityArea_Id 
        LEFT OUTER JOIN
        dbo.ProviderAvailability	ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderAvailability.UtilityProvider_Id 
        LEFT OUTER JOIN
		dbo.UDays					ON dbo.ProviderAvailability.UDays_Id = dbo.UDays.UDays_Id 
		LEFT OUTER JOIN
		dbo.ProviderCompliantSpec	ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderCompliantSpec.UtilityProvider_Id 
		LEFT OUTER JOIN
		dbo.UtilityCompliantSpec	ON dbo.ProviderCompliantSpec.UtilityCompliantSpec_Id = dbo.UtilityCompliantSpec.UtilityCompliantSpec_Id 
		LEFT OUTER JOIN
		dbo.UtilityCompliantType	ON dbo.UtilityCompliantSpec.UtilityCompliantType_Id = dbo.UtilityCompliantType.UtilityCompliantType_Id 
		LEFT OUTER JOIN
		dbo.UtilityType				ON dbo.UtilityCompliantType.UtilityType_Id = dbo.UtilityType.UtilityType_Id 
		LEFT OUTER JOIN
		dbo.Appointment				ON dbo.Appointment.UtilityProvider_Id = dbo.UtilityProvider.UtilityProvider_Id
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[28] 4[16] 2[16] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "UtilityProvider"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 125
               Right = 262
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ProviderArea"
            Begin Extent = 
               Top = 6
               Left = 300
               Bottom = 110
               Right = 472
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UtilityArea"
            Begin Extent = 
               Top = 6
               Left = 510
               Bottom = 95
               Right = 682
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ProviderAvailability"
            Begin Extent = 
               Top = 6
               Left = 720
               Bottom = 125
               Right = 953
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UDays"
            Begin Extent = 
               Top = 96
               Left = 510
               Bottom = 185
               Right = 670
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ProviderCompliantSpec"
            Begin Extent = 
               Top = 126
               Left = 38
               Bottom = 230
               Right = 251
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UtilityCompliantSpec"
            Begin Extent = 
               Top = 126
               Left = 289
               Bottom = 230
               Right = 508' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewGetProviderAvailability'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UtilityCompliantType"
            Begin Extent = 
               Top = 126
               Left = 708
               Bottom = 230
               Right = 925
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "UtilityType"
            Begin Extent = 
               Top = 234
               Left = 38
               Bottom = 323
               Right = 211
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Appointment"
            Begin Extent = 
               Top = 234
               Left = 249
               Bottom = 353
               Right = 461
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewGetProviderAvailability'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'ViewGetProviderAvailability'
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_GetDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Selected_Status INT
--EXEC UtilityProvider_GetDetails 1,@Selected_Status OUT
CREATE PROCEDURE [dbo].[UtilityProvider_GetDetails]
(
	@UtilityProvider_Id		INT,
	@Selected_Status		INT OUTPUT
)
AS
BEGIN
	SELECT DISTINCT
		UtilityProvider.UtilityProvider_Id,
		UtilityProvider_Name, 
		UtilityProvider_Mobile, 
		UtilityProvider_Email, 
		UtilityProvider_Password, 
		UtilityProvider_Location, 
		UtilityProvider_Address, 
		UtilityProvider_ImgURL, 
		UtilityProvider_Active,
		dbo.datefunction(UtilityProvider_RegDay,UtilityProvider_RegMon,UtilityProvider_RegYear)AS UtilityProvider_RegDate,
		UtilityProvider_RatePerHour, 
		UtilityType_Name,
		UtilityArea_Name, 
 		UtilityCompliantType_Type, 
		UtilityCompliantSpec_Name, 
		UDays_Name,
		CAST (ProviderAvailability_FromHour AS VARCHAR(5) )+ ':' + CAST ( ProviderAvailability_FromMin AS VARCHAR(5))+ ':' +'00' AS ProviderAvailability_TimeFrom,
		CAST (ProviderAvailability_ToHour AS VARCHAR(5) )+ ':' + CAST ( ProviderAvailability_ToMin AS VARCHAR(5))+ ':' +'00' AS ProviderAvailability_TimeTo,
		UtilityProvider_Experience, 
		UtilityProvider_FixziRating, 
		UtilityProvider_Latitude, 
		UtilityProvider_Longitude
	FROM            
		UtilityProvider 
		INNER JOIN
		ProviderArea ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderArea.UtilityProvider_Id 
		INNER JOIN
		UtilityArea ON dbo.ProviderArea.UtilityArea_Id = dbo.UtilityArea.UtilityArea_Id 
		INNER JOIN
		ProviderAvailability ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderAvailability.UtilityProvider_Id 
		INNER JOIN
        UDays ON dbo.ProviderAvailability.UDays_Id = dbo.UDays.UDays_Id 
        INNER JOIN
		ProviderCompliantSpec ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderCompliantSpec.UtilityProvider_Id 
		INNER JOIN
		UtilityCompliantSpec ON dbo.ProviderCompliantSpec.UtilityCompliantSpec_Id = dbo.UtilityCompliantSpec.UtilityCompliantSpec_Id 
		INNER JOIN
		UtilityCompliantType ON dbo.UtilityCompliantSpec.UtilityCompliantType_Id = dbo.UtilityCompliantType.UtilityCompliantType_Id 
		INNER JOIN
		UtilityType ON dbo.UtilityCompliantType.UtilityType_Id = dbo.UtilityType.UtilityType_Id
	WHERE
		UtilityProvider.UtilityProvider_Id = @UtilityProvider_Id
	IF( @@ROWCOUNT > 0)
		SET @Selected_Status			=		1
	ELSE
		SET @Selected_Status			=		0
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_GetByTypeLocDT]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Selected_Status INT
--Exec UtilityProvider_GetByTypeLocDT 1,1,4,1,'tvm',21,10,2015,2,10,@Selected_Status OUT
CREATE PROCEDURE [dbo].[UtilityProvider_GetByTypeLocDT]
(
	@UtilityType_Id				INT,
	@UtilityArea_Id				INT,
	@UtilityCompliantType_Id	INT,
	@UtilityCompliantSpec_Id	INT,
	@UtilityProvider_Location	VARCHAR(50),
	@Selected_Day				INT,
	@Selected_Mon				INT,
	@Selected_Year				INT,
	@Time_Hour					INT,
	@Time_Min					INT,
	@Selected_Status			INT OUTPUT
)
AS
BEGIN
		
		DECLARE @UtilityProvider_AvailableDay VARCHAR(10),@SelectedDate DATE,@SelectedTime Time,@Today DATE;
		
		SELECT @SelectedDate = (dbo.DateFunction(@Selected_Day,@Selected_Mon,@Selected_Year));
		
		SELECT @UtilityProvider_AvailableDay=( DATENAME(dw,@SelectedDate))
		
		SELECT @SelectedTime = Convert(Time,(CAST (@Time_Hour AS VARCHAR(5) )+ ':' + CAST ( @Time_Min AS VARCHAR(5))+ ':' +'00'));

SELECT  DISTINCT
		UtilityProvider.UtilityProvider_Id,     
		UtilityProvider_Name, 
		UtilityProvider_Mobile, 
		UtilityProvider_Email, 
		UtilityProvider_Password, 
		UtilityProvider_Location, 
		UtilityProvider_Address, 
		UtilityProvider_ImgURL, 
		UtilityProvider_Active,
		dbo.datefunction(UtilityProvider_RegDay,UtilityProvider_RegMon,UtilityProvider_RegYear)AS UtilityProvider_RegDate,
		UtilityProvider_RatePerHour,
		UtilityProvider_Experience, 
		UtilityProvider_FixziRating, 
		UtilityProvider_Latitude, 
		UtilityProvider_Longitude,
		UDays_Name, 
		CAST (ProviderAvailability_FromHour AS VARCHAR(5))+ ':' + CAST (ProviderAvailability_FromMin AS VARCHAR(5))+ ':' +'00' AS ProviderAvailability_TimeFrom,
		CAST (ProviderAvailability_ToHour AS VARCHAR(5))+ ':' + CAST (ProviderAvailability_ToMin AS VARCHAR(5))+ ':' +'00' AS ProviderAvailability_TimeTo,
		UtilityType_Name, 
		UtilityArea_Name, 
		UtilityCompliantType_Type, 
		UtilityCompliantSpec_Name 
	FROM           
		UtilityProvider 
		INNER JOIN
		ProviderArea			ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderArea.UtilityProvider_Id 
		INNER JOIN
		UtilityArea				ON dbo.ProviderArea.UtilityArea_Id = dbo.UtilityArea.UtilityArea_Id 
		INNER JOIN
		ProviderAvailability	ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderAvailability.UtilityProvider_Id 
		INNER JOIN
        UDays					ON dbo.ProviderAvailability.UDays_Id = dbo.UDays.UDays_Id 
        INNER JOIN
		ProviderCompliantSpec	ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderCompliantSpec.UtilityProvider_Id 
		INNER JOIN
		UtilityCompliantSpec	ON dbo.ProviderCompliantSpec.UtilityCompliantSpec_Id = dbo.UtilityCompliantSpec.UtilityCompliantSpec_Id 
		INNER JOIN
		UtilityCompliantType	ON dbo.UtilityCompliantSpec.UtilityCompliantType_Id = dbo.UtilityCompliantType.UtilityCompliantType_Id 
		INNER JOIN
		UtilityType				ON dbo.UtilityCompliantType.UtilityType_Id = dbo.UtilityType.UtilityType_Id
		INNER JOIN 
        Appointment				ON dbo.UtilityProvider.UtilityProvider_Id = dbo.Appointment.UtilityProvider_Id
	WHERE 
		dbo.UtilityProvider.UtilityProvider_Active			=		'True' 
		AND
		dbo.UtilityType.UtilityType_Id						=		@UtilityType_Id 
		AND
		dbo.UtilityArea.UtilityArea_Id						=		@UtilityArea_Id 
		AND	
		dbo.UtilityCompliantType.UtilityCompliantType_Id	=		@UtilityCompliantType_Id 
		AND
		dbo.UtilityCompliantSpec.UtilityCompliantSpec_Id	=		@UtilityCompliantSpec_Id 
		AND
		dbo.UtilityProvider.UtilityProvider_Location		=		@UtilityProvider_Location 
	 	AND
		dbo.UDays.UDays_Name								=		@UtilityProvider_AvailableDay 
		AND
		Convert(Time,(CAST(ProviderAvailability_FromHour AS VARCHAR(5))+ ':' + CAST(ProviderAvailability_FromMin AS VARCHAR(5))+ ':' +'00'))<= @SelectedTime
		AND
		Convert(Time,(CAST (ProviderAvailability_ToHour AS VARCHAR(5) )+ ':' + CAST ( ProviderAvailability_ToMin AS VARCHAR(5))+ ':' +'00')) > @SelectedTime
		--AND	
		--dbo.datefunction(Appointment_Day,Appointment_Month,Appointment_Year)<> @SelectedDate;
		
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status = 1;
	ELSE
	SET @Selected_Status = 0;
PRINT @SelectedDate;
PRINT @UtilityProvider_AvailableDay;
PRINT @SelectedTime;			 
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_GetByTypeLoc]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Selected_Status INT 
--EXEC UtilityProvider_GetByTypeLoc 1,1,4,1,'kollam',@Selected_Status OUT
CREATE PROCEDURE [dbo].[UtilityProvider_GetByTypeLoc]
(
	@UtilityType_Id				INT,
	@UtilityArea_Id				INT,
	@UtilityCompliantType_Id	INT,
	@UtilityCompliantSpec_Id	INT,
	@UtilityProvider_Location	VARCHAR(50),
	@Selected_Status			INT OUTPUT
)
AS
BEGIN
SELECT DISTINCT
		UtilityProvider.UtilityProvider_Id,     
		UtilityProvider_Name, 
		UtilityProvider_Mobile, 
		UtilityProvider_Email, 
		UtilityProvider_Password, 
		UtilityProvider_Location, 
		UtilityProvider_Address, 
		UtilityProvider_ImgURL, 
		UtilityProvider_Active,
		dbo.datefunction(UtilityProvider_RegDay,UtilityProvider_RegMon,UtilityProvider_RegYear)AS UtilityProvider_RegDate,
		UtilityProvider_RatePerHour,
		UtilityProvider_Experience, 
		UtilityProvider_FixziRating, 
		UtilityProvider_Latitude, 
		UtilityProvider_Longitude,
		UDays_Name, 
		CAST (ProviderAvailability_FromHour AS VARCHAR(5))+ ':' + CAST (ProviderAvailability_FromMin AS VARCHAR(5))+ ':' +'00' AS ProviderAvailability_TimeFrom,
		CAST (ProviderAvailability_ToHour AS VARCHAR(5))+ ':' + CAST (ProviderAvailability_ToMin AS VARCHAR(5))+ ':' +'00' AS ProviderAvailability_TimeTo,
		UtilityType_Name, 
		UtilityArea_Name, 
		UtilityCompliantType_Type, 
		UtilityCompliantSpec_Name 
	FROM            
		UtilityProvider 
		INNER JOIN
		ProviderArea ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderArea.UtilityProvider_Id 
		INNER JOIN
		UtilityArea ON dbo.ProviderArea.UtilityArea_Id = dbo.UtilityArea.UtilityArea_Id 
		INNER JOIN
		ProviderAvailability ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderAvailability.UtilityProvider_Id 
		INNER JOIN
        UDays ON dbo.ProviderAvailability.UDays_Id = dbo.UDays.UDays_Id 
        INNER JOIN
		ProviderCompliantSpec ON dbo.UtilityProvider.UtilityProvider_Id = dbo.ProviderCompliantSpec.UtilityProvider_Id 
		INNER JOIN
		UtilityCompliantSpec ON dbo.ProviderCompliantSpec.UtilityCompliantSpec_Id = dbo.UtilityCompliantSpec.UtilityCompliantSpec_Id 
		INNER JOIN
		UtilityCompliantType ON dbo.UtilityCompliantSpec.UtilityCompliantType_Id = dbo.UtilityCompliantType.UtilityCompliantType_Id 
		INNER JOIN
		UtilityType ON dbo.UtilityCompliantType.UtilityType_Id = dbo.UtilityType.UtilityType_Id
		
	WHERE 
	dbo.UtilityProvider.UtilityProvider_Active				=		'True'
	AND
	dbo.UtilityType.UtilityType_Id							=		@UtilityType_Id
	AND
	dbo.UtilityArea.UtilityArea_Id							=		@UtilityArea_Id
	AND
	dbo.UtilityCompliantType.UtilityCompliantType_Id		=		@UtilityCompliantType_Id
	AND
	dbo.UtilityCompliantSpec.UtilityCompliantSpec_Id		=		@UtilityCompliantSpec_Id
	AND
	dbo.UtilityProvider.UtilityProvider_Location			=		@UtilityProvider_Location;

	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_GetAvailability]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Selected_Status INT
--EXEC UtilityProvider_GetAvailability 1,1,'4,5','1,3','kollam',21,10,2015,2,50,@Selected_Status OUT

CREATE PROCEDURE [dbo].[UtilityProvider_GetAvailability]
(
	@UtilityType_Id				    INT,
	@UtilityArea_IdArray	        VARCHAR(MAX),
	@UtilityCompliantType_IdArray   VARCHAR(MAX),
	@UtilityCompliantSpec_IdArray	VARCHAR(MAX),
	@UtilityProvider_Location	    VARCHAR(50),
	@Selected_Day				    INT,
	@Selected_Mon				    INT,
	@Selected_Year				    INT,
	@Time_Hour					    INT,
	@Time_Min					    INT,
	@Selected_Status			    INT OUTPUT
)
AS
BEGIN

	DECLARE @UtilityProvider_AvailableDay VARCHAR(10),@SelectedDate DATE,@SelectedTime Time,@Today DATE;
	
	SELECT @SelectedDate = (dbo.DateFunction(@Selected_Day,@Selected_Mon,@Selected_Year));
				  
	SELECT @UtilityProvider_AvailableDay=( DATENAME(dw, dbo.DateFunction(@Selected_Day,@Selected_Mon,@Selected_Year)))
		
	SELECT @SelectedTime = CONVERT(Time,(CAST (@Time_Hour AS VARCHAR(5) )+ ':' + CAST ( @Time_Min AS VARCHAR(5))+ ':' +'00'));
	
	SELECT DISTINCT
		UtilityProvider_Id,UtilityProvider_Name,UtilityProvider_Mobile,UtilityProvider_RatePerHour,UtilityProvider_RatePerHour/2 AS Minimum_Required_Amount,
		UtilityProvider_Experience,UtilityProvider_FixziRating,UtilityProvider_Latitude,UtilityProvider_Longitude 
	FROM 
		ViewGetProviderAvailability
	WHERE 
		UtilityProvider_Active		=		'True' 
	AND
		UtilityType_Id				=		@UtilityType_Id 
	AND
		UtilityArea_Id				IN		(SELECT ConvertValues	FROM dbo.ConvertCommaValuesAsTable(@UtilityArea_IdArray))
	AND	
		UtilityCompliantType_Id		IN		(SELECT ConvertValues	FROM dbo.ConvertCommaValuesAsTable(@UtilityCompliantType_IdArray))
	AND
		UtilityCompliantSpec_Id  	IN		(SELECT ConvertValues	FROM dbo.ConvertCommaValuesAsTable(@UtilityCompliantSpec_IdArray))
	AND
		UtilityProvider_Location	=		@UtilityProvider_Location 
	AND
		UDays_Name					=		@UtilityProvider_AvailableDay 
	AND
		AvailabilityFromTime		<=		@SelectedTime
	AND
		AvailabilityToTime			>		@SelectedTime
	AND
		UtilityProvider_Id
	NOT IN
	(
	SELECT 
		UtilityProvider_Id
	FROM 
		ViewGetProviderAvailability 
	WHERE 
		Appointment_Date			=		@SelectedDate 
	AND	
		AppointmentFromTime			<		@SelectedTime
	AND 
		AppointmentToTime			>		@SelectedTime
	)	
		
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0					 
END
GO
/****** Object:  StoredProcedure [dbo].[UtilityProvider_GetAppointmentDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--EXEC UtilityProvider_GetAppointmentDetails 1
CREATE PROCEDURE [dbo].[UtilityProvider_GetAppointmentDetails]
(
	@UtilityProvider_Id		INT,
	@Selected_Status		BIT OUTPUT
)
AS
BEGIN
	SELECT	DISTINCT
			Appointment_Id,
			Appointment_Date,
			Appointment_Time,
			Appointment_Status,
			Customer_Name,
			Appointment_Location,
			Appointment_Address,
			Appointment_Latitude, 
			Appointment_Longitude 
	FROM	GetAppointmentDetails
	WHERE	UtilityProvider_Id = @UtilityProvider_Id
			AND
			Appointment_Date >= dbo.DateFunction(Day(getdate()),Month(getdate()),Year(getdate()));
		
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1
	ELSE
	SET @Selected_Status			=		0	 
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_GetAppointmentDetails]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--EXEC Customer_GetAppointmentDetails 2
CREATE PROCEDURE [dbo].[Customer_GetAppointmentDetails]
(
	@Customer_Id			INT,
	@Selected_Status		BIT OUTPUT
)
AS
BEGIN
	SELECT	DISTINCT
			Appointment_Id,
			Appointment_Date,
			Appointment_Time,
			Appointment_Status,
			UtilityType_Name AS UtilityType, 
			UtilityProvider_Name
	FROM	GetAppointmentDetails
	WHERE	Customer_Id = @Customer_Id
			AND
			Appointment_Date >= dbo.DateFunction(Day(getdate()),Month(getdate()),Year(getdate())); 
	
	IF( @@ROWCOUNT > 0)
	SET @Selected_Status			=		1;
	ELSE
	SET @Selected_Status			=		0;	
END
GO
/****** Object:  StoredProcedure [dbo].[Customer_CancelAppointment]    Script Date: 11/03/2015 12:00:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--DECLARE @Update_Status BIT
--EXEC Customer_CancelAppointment 1,2,@Update_Status OUT
CREATE PROCEDURE [dbo].[Customer_CancelAppointment]
(
	@Appointment_Id			INT,
	@Customer_Id			INT,
	@Update_Status			BIT OUTPUT
)
AS
BEGIN
	UPDATE	Appointment 
	SET		Appointment_Status		='Canceled By Customer'	WHERE Appointment_Id = @Appointment_Id ; 
	
IF(@@ROWCOUNT >0 )
BEGIN
	SET		@Update_Status			= 1;
	DECLARE 
			@AppointmentFromTime	TIME,		
			@Appointment_Date		DATE,		
			@AppointmentTime		DATETIME,	
			@CurrentTime			DATETIME,	
			@TimeDiff				INT,
			@UtilityProvider_Id		INT;		
			
	SELECT	@UtilityProvider_Id		= UtilityProvider_Id,
			@AppointmentFromTime	= AppointmentFromTime,
			@Appointment_Date		= Appointment_Date 
	FROM 	ViewGetProviderAvailability 
	WHERE	Appointment_Id			= @Appointment_Id;
		
	SET		@AppointmentTime		= CONVERT(DATETIME, CAST(@Appointment_Date as DATETIME) + CAST(@AppointmentFromTime AS TIME));
	SET		@CurrentTime			= GETDATE();
	SET		@TimeDiff				= DATEDIFF(hh, @AppointmentTime, @CurrentTime);
		
	IF( @TimeDiff	<=	10 )
		BEGIN
			EXEC Customer_DropCharges @TimeDiff,@UtilityProvider_Id,@Customer_Id
		END
	
	SELECT	UtilityProvider_Id,
			UtilityProvider_Name,
			UtilityProvider_Mobile,
			UtilityProvider_Email
	FROM	UtilityProvider
	WHERE	UtilityProvider_Id		= @UtilityProvider_Id
	INSERT INTO dbo.MsgStatus Values('UtilityProvider',@UtilityProvider_Id,'Appointment Canceled by Customer',0);
END
ELSE 
	SET		@Update_Status			= 0;
	PRINT	@Update_Status;
END
GO
/****** Object:  ForeignKey [FK_Appointment_Customer]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_Customer] FOREIGN KEY([Customer_Id])
REFERENCES [dbo].[Customer] ([Customer_Id])
GO
ALTER TABLE [dbo].[Appointment] CHECK CONSTRAINT [FK_Appointment_Customer]
GO
/****** Object:  ForeignKey [FK_Appointment_UtilityProvider]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_UtilityProvider] FOREIGN KEY([UtilityProvider_Id])
REFERENCES [dbo].[UtilityProvider] ([UtilityProvider_Id])
GO
ALTER TABLE [dbo].[Appointment] CHECK CONSTRAINT [FK_Appointment_UtilityProvider]
GO
/****** Object:  ForeignKey [FK_Compliant_Appointment]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[Compliant]  WITH CHECK ADD  CONSTRAINT [FK_Compliant_Appointment] FOREIGN KEY([Appointment_Id])
REFERENCES [dbo].[Appointment] ([Appointment_Id])
GO
ALTER TABLE [dbo].[Compliant] CHECK CONSTRAINT [FK_Compliant_Appointment]
GO
/****** Object:  ForeignKey [FK_Payment_Appointment]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_Appointment] FOREIGN KEY([Customer_Id])
REFERENCES [dbo].[Customer] ([Customer_Id])
GO
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_Appointment]
GO
/****** Object:  ForeignKey [FK_Payment_Currency]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_Currency] FOREIGN KEY([Currency_Id])
REFERENCES [dbo].[Currency] ([Currency_Id])
GO
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_Currency]
GO
/****** Object:  ForeignKey [FK_ProviderArea_UtilityArea]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[ProviderArea]  WITH CHECK ADD  CONSTRAINT [FK_ProviderArea_UtilityArea] FOREIGN KEY([UtilityArea_Id])
REFERENCES [dbo].[UtilityArea] ([UtilityArea_Id])
GO
ALTER TABLE [dbo].[ProviderArea] CHECK CONSTRAINT [FK_ProviderArea_UtilityArea]
GO
/****** Object:  ForeignKey [FK_ProviderArea_UtilityProvider]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[ProviderArea]  WITH CHECK ADD  CONSTRAINT [FK_ProviderArea_UtilityProvider] FOREIGN KEY([UtilityProvider_Id])
REFERENCES [dbo].[UtilityProvider] ([UtilityProvider_Id])
GO
ALTER TABLE [dbo].[ProviderArea] CHECK CONSTRAINT [FK_ProviderArea_UtilityProvider]
GO
/****** Object:  ForeignKey [FK_ProviderAvailability_Days]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[ProviderAvailability]  WITH CHECK ADD  CONSTRAINT [FK_ProviderAvailability_Days] FOREIGN KEY([UDays_Id])
REFERENCES [dbo].[UDays] ([UDays_Id])
GO
ALTER TABLE [dbo].[ProviderAvailability] CHECK CONSTRAINT [FK_ProviderAvailability_Days]
GO
/****** Object:  ForeignKey [FK_ProviderAvailability_UtilityProvider]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[ProviderAvailability]  WITH CHECK ADD  CONSTRAINT [FK_ProviderAvailability_UtilityProvider] FOREIGN KEY([UtilityProvider_Id])
REFERENCES [dbo].[UtilityProvider] ([UtilityProvider_Id])
GO
ALTER TABLE [dbo].[ProviderAvailability] CHECK CONSTRAINT [FK_ProviderAvailability_UtilityProvider]
GO
/****** Object:  ForeignKey [FK_ProviderCompliantSpec_UtilityCompliantSpec]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[ProviderCompliantSpec]  WITH CHECK ADD  CONSTRAINT [FK_ProviderCompliantSpec_UtilityCompliantSpec] FOREIGN KEY([UtilityCompliantSpec_Id])
REFERENCES [dbo].[UtilityCompliantSpec] ([UtilityCompliantSpec_Id])
GO
ALTER TABLE [dbo].[ProviderCompliantSpec] CHECK CONSTRAINT [FK_ProviderCompliantSpec_UtilityCompliantSpec]
GO
/****** Object:  ForeignKey [FK_ProviderCompliantSpec_UtilityProvider]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[ProviderCompliantSpec]  WITH CHECK ADD  CONSTRAINT [FK_ProviderCompliantSpec_UtilityProvider] FOREIGN KEY([UtilityProvider_Id])
REFERENCES [dbo].[UtilityProvider] ([UtilityProvider_Id])
GO
ALTER TABLE [dbo].[ProviderCompliantSpec] CHECK CONSTRAINT [FK_ProviderCompliantSpec_UtilityProvider]
GO
/****** Object:  ForeignKey [FK_Review_Appointment]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[Review]  WITH CHECK ADD  CONSTRAINT [FK_Review_Appointment] FOREIGN KEY([Appointment_Id])
REFERENCES [dbo].[Appointment] ([Appointment_Id])
GO
ALTER TABLE [dbo].[Review] CHECK CONSTRAINT [FK_Review_Appointment]
GO
/****** Object:  ForeignKey [FK_UtilityCompliantSpec_UtilityCompliantType]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[UtilityCompliantSpec]  WITH CHECK ADD  CONSTRAINT [FK_UtilityCompliantSpec_UtilityCompliantType] FOREIGN KEY([UtilityCompliantType_Id])
REFERENCES [dbo].[UtilityCompliantType] ([UtilityCompliantType_Id])
GO
ALTER TABLE [dbo].[UtilityCompliantSpec] CHECK CONSTRAINT [FK_UtilityCompliantSpec_UtilityCompliantType]
GO
/****** Object:  ForeignKey [FK_UtilityCompliantType_UtilityCompliantType]    Script Date: 11/03/2015 12:00:24 ******/
ALTER TABLE [dbo].[UtilityCompliantType]  WITH CHECK ADD  CONSTRAINT [FK_UtilityCompliantType_UtilityCompliantType] FOREIGN KEY([UtilityType_Id])
REFERENCES [dbo].[UtilityType] ([UtilityType_Id])
GO
ALTER TABLE [dbo].[UtilityCompliantType] CHECK CONSTRAINT [FK_UtilityCompliantType_UtilityCompliantType]
GO
