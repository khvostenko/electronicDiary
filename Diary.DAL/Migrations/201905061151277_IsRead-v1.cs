namespace Diary.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class IsReadv1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.UserRoles",
                c => new
                    {
                        UserId = c.Long(nullable: false),
                        RoleId = c.Long(nullable: false),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.Roles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        FullName = c.String(),
                        FacultyId = c.Long(),
                        Email = c.String(),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Faculties", t => t.FacultyId)
                .Index(t => t.FacultyId);
            
            CreateTable(
                "dbo.UserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Long(nullable: false),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Faculties",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Groups",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        FacultyId = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Faculties", t => t.FacultyId, cascadeDelete: true)
                .Index(t => t.FacultyId);
            
            CreateTable(
                "dbo.UserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.Long(nullable: false),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Marks",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        StudentId = c.Long(),
                        SubjectId = c.Long(),
                        Rating = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Subjects", t => t.SubjectId)
                .ForeignKey("dbo.Students", t => t.StudentId)
                .Index(t => t.StudentId)
                .Index(t => t.SubjectId);
            
            CreateTable(
                "dbo.Subjects",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        IsExam = c.Boolean(nullable: false),
                        TutorId = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Tutors", t => t.TutorId)
                .Index(t => t.TutorId);

            CreateTable(
                    "dbo.Message",
                    c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Text = c.String(),
                        IsRead = c.Boolean(nullable: false),
                        TimeSent = c.DateTime(nullable: false),
                        SenderUserId = c.Long(),
                        ReceiverUserId = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.ReceiverUserId)
                .ForeignKey("dbo.Users", t => t.SenderUserId)
                .Index(t => t.SenderUserId)
                .Index(t => t.ReceiverUserId);
            
            CreateTable(
                "dbo.SubjectGroup",
                c => new
                    {
                        SubjectRefId = c.Long(nullable: false),
                        GroupRefId = c.Long(nullable: false),
                    })
                .PrimaryKey(t => new { t.SubjectRefId, t.GroupRefId })
                .ForeignKey("dbo.Subjects", t => t.SubjectRefId, cascadeDelete: true)
                .ForeignKey("dbo.Groups", t => t.GroupRefId, cascadeDelete: true)
                .Index(t => t.SubjectRefId)
                .Index(t => t.GroupRefId);
            
            CreateTable(
                "dbo.Administrators",
                c => new
                    {
                        Id = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Id)
                .Index(t => t.Id);
            
            CreateTable(
                "dbo.Tutors",
                c => new
                    {
                        Id = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Id)
                .Index(t => t.Id);
            
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        Id = c.Long(nullable: false),
                        StudentCardId = c.String(),
                        GroupId = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.Id)
                .ForeignKey("dbo.Groups", t => t.GroupId)
                .Index(t => t.Id)
                .Index(t => t.GroupId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Students", "GroupId", "dbo.Groups");
            DropForeignKey("dbo.Students", "Id", "dbo.Users");
            DropForeignKey("dbo.Tutors", "Id", "dbo.Users");
            DropForeignKey("dbo.Administrators", "Id", "dbo.Users");
            DropForeignKey("dbo.Message", "User_Id1", "dbo.Users");
            DropForeignKey("dbo.UserRoles", "UserId", "dbo.Users");
            DropForeignKey("dbo.Message", "User_Id", "dbo.Users");
            DropForeignKey("dbo.UserLogins", "UserId", "dbo.Users");
            DropForeignKey("dbo.Users", "FacultyId", "dbo.Faculties");
            DropForeignKey("dbo.Groups", "FacultyId", "dbo.Faculties");
            DropForeignKey("dbo.Marks", "StudentId", "dbo.Students");
            DropForeignKey("dbo.Subjects", "TutorId", "dbo.Tutors");
            DropForeignKey("dbo.Message", "SenderUserId", "dbo.Users");
            DropForeignKey("dbo.Message", "ReceiverUserId", "dbo.Users");
            DropForeignKey("dbo.Marks", "SubjectId", "dbo.Subjects");
            DropForeignKey("dbo.SubjectGroup", "GroupRefId", "dbo.Groups");
            DropForeignKey("dbo.SubjectGroup", "SubjectRefId", "dbo.Subjects");
            DropForeignKey("dbo.UserClaims", "UserId", "dbo.Users");
            DropForeignKey("dbo.UserRoles", "RoleId", "dbo.Roles");
            DropIndex("dbo.Students", new[] { "GroupId" });
            DropIndex("dbo.Students", new[] { "Id" });
            DropIndex("dbo.Tutors", new[] { "Id" });
            DropIndex("dbo.Administrators", new[] { "Id" });
            DropIndex("dbo.SubjectGroup", new[] { "GroupRefId" });
            DropIndex("dbo.SubjectGroup", new[] { "SubjectRefId" });
            DropIndex("dbo.Message", new[] { "User_Id1" });
            DropIndex("dbo.Message", new[] { "User_Id" });
            DropIndex("dbo.Message", new[] { "ReceiverUserId" });
            DropIndex("dbo.Message", new[] { "SenderUserId" });
            DropIndex("dbo.Subjects", new[] { "TutorId" });
            DropIndex("dbo.Marks", new[] { "SubjectId" });
            DropIndex("dbo.Marks", new[] { "StudentId" });
            DropIndex("dbo.UserLogins", new[] { "UserId" });
            DropIndex("dbo.Groups", new[] { "FacultyId" });
            DropIndex("dbo.UserClaims", new[] { "UserId" });
            DropIndex("dbo.Users", new[] { "FacultyId" });
            DropIndex("dbo.UserRoles", new[] { "RoleId" });
            DropIndex("dbo.UserRoles", new[] { "UserId" });
            DropIndex("dbo.Roles", "RoleNameIndex");
            DropTable("dbo.Students");
            DropTable("dbo.Tutors");
            DropTable("dbo.Administrators");
            DropTable("dbo.SubjectGroup");
            DropTable("dbo.Message");
            DropTable("dbo.Subjects");
            DropTable("dbo.Marks");
            DropTable("dbo.UserLogins");
            DropTable("dbo.Groups");
            DropTable("dbo.Faculties");
            DropTable("dbo.UserClaims");
            DropTable("dbo.Users");
            DropTable("dbo.UserRoles");
            DropTable("dbo.Roles");
        }
    }
}
