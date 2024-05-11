-- CreateTable
CREATE TABLE `guidedForm` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `currentRole` VARCHAR(191) NOT NULL,
    `areaOfExpertise` LONGTEXT NOT NULL,
    `workingInYourField` VARCHAR(191) NOT NULL,
    `levelOfEducation` VARCHAR(191) NOT NULL,
    `sustainableDevelopmentGoals` VARCHAR(191) NOT NULL,
    `mentorshipFrequency` VARCHAR(191) NOT NULL,
    `yearsOfWorkExperience` VARCHAR(191) NOT NULL,
    `primaryMotivationUniversity` VARCHAR(191) NULL,
    `primaryMotivationCareer` VARCHAR(191) NULL,
    `careerPathExtent` VARCHAR(191) NULL,
    `linkToSocialMedia` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `guidedForm_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
