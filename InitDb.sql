USE [TravelDb]
GO
--Admin initializtion email: admin@gmail.com password: Aa123456
SET IDENTITY_INSERT [dbo].[Users] ON
INSERT [dbo].[Users] ([Id], [FullName], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName])
VALUES (1, N'Адміністратор', N'admin@gmail.com', 0, N'AD4G5UH/rhoHQjjXn1OLqk2B7qhA0UMzwqeUiLGDIiISYcz+PoB+OMcFMvQlc3ezow==', N'9c71cb5d-185b-41b7-a6e1-d244a802e423', NULL, 0, 0, NULL, 0, 0, N'admin@gmail.com')
SET IDENTITY_INSERT [dbo].[Users] OFF

--Roles initialization
SET IDENTITY_INSERT [dbo].[Roles] ON
INSERT [dbo].[Roles] ([Id], [Name]) VALUES (1, N'Admin')
INSERT [dbo].[Roles] ([Id], [Name]) VALUES (2, N'User')
SET IDENTITY_INSERT [dbo].[Roles] OFF

--UserRoles initialization
INSERT [dbo].[UsersRoles] ([UserId], [RoleId], [CustomRole_Id]) VALUES (1, 1, NULL)
INSERT [dbo].[Administrators] ([Id]) VALUES (1)