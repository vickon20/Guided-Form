/*
  Warnings:

  - You are about to drop the column `familiarWithSDG` on the `guidedform` table. All the data in the column will be lost.
  - Added the required column `sustainableDevelopmentGoals` to the `guidedForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workingInYourField` to the `guidedForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `guidedform` DROP COLUMN `familiarWithSDG`,
    ADD COLUMN `sustainableDevelopmentGoals` VARCHAR(191) NOT NULL,
    ADD COLUMN `workingInYourField` VARCHAR(191) NOT NULL,
    MODIFY `areaOfExpertise` LONGTEXT NOT NULL;
