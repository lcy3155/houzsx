/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50556
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50556
File Encoding         : 65001

Date: 2017-11-14 16:39:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `list2`
-- ----------------------------
DROP TABLE IF EXISTS `list2`;
CREATE TABLE `list2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `txt` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list2
-- ----------------------------
INSERT INTO `list2` VALUES ('88', 'http://localhost:3000/images/1510648285506.jpg', '111111', '<p>11111111111111111111111111111111111111111</p>', null);
INSERT INTO `list2` VALUES ('89', 'http://localhost:3000/images/1510648300373.jpg', '222', '<p>222222222222222</p>', null);
INSERT INTO `list2` VALUES ('90', 'http://localhost:3000/images/1510648323463.jpg', '3333', '<p>333333333</p>', null);
INSERT INTO `list2` VALUES ('91', 'http://localhost:3000/images/1510648344726.jpg', '444444444444444', '<p>44444444444444444444444444444444444444444444444444444</p>', null);
