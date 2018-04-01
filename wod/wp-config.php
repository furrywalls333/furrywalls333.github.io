<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i602892_wp1');

/** MySQL database username */
define('DB_USER', 'i602892_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'Z&VOXO0bf^35~#1');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Tqt791MzcQsyh9EEdSGjE19DymxZJwlcLnHG7LHsNANhvWERIAmMhUUVDrgkB2qv');
define('SECURE_AUTH_KEY',  'U0yrJpidgDY4OctmWsWZj26SwmUHxBfONWjzNAsex4Cp9gt7ezDxANpvi8Prh3zo');
define('LOGGED_IN_KEY',    'DDEwGTUlUkBXmddhlbKvmCDVJ1UAWBSLOz8fkCkxCG3y49pPV1nNnHB7vuruEGl4');
define('NONCE_KEY',        '2rBwpv0XI3xYAxR9RXHPxKx96zqxilvVx9HYSljlcQ1PihGbTwhU3MOA74s9vjMy');
define('AUTH_SALT',        'AIDpHg1DIWonbF6qbg92BIB7s8nNcSiZzJ0pe1IQoXTiMYcm5jTs0ZRQV3vrvlyh');
define('SECURE_AUTH_SALT', 'IQvjr4BsL8LsXGoJEW1Bhh8qOCQ0T253CiHSTWeH6OImaVRjPLcLZRgeA23LovFj');
define('LOGGED_IN_SALT',   'HDzDOZ61f49tbG68fockkPG3HWy4JH4AbIwSnzJLhdcssjfWOJxaB3DZ7BOpmBKh');
define('NONCE_SALT',       '2J3RuIJWG88btd2GTKpYcX43WfMFJHpA3E0FsBfWgv7MrOq6FaaBog4BV8WNC2JP');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
