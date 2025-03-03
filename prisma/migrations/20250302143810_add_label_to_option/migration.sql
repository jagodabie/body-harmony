/*
  Warnings:

  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Option` DROP FOREIGN KEY `Option_fieldId_fkey`;

-- AlterTable
ALTER TABLE `Field` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `options` JSON NULL,
    MODIFY `label` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Form` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `Option`;
