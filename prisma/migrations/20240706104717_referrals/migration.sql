-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `refereeName` VARCHAR(191) NOT NULL,
    `refereeEmail` VARCHAR(191) NOT NULL,
    `refereePhoneNumber` INTEGER NOT NULL,
    `friendName` VARCHAR(191) NOT NULL,
    `friendEmail` VARCHAR(191) NOT NULL,
    `friendPhoneNumber` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
