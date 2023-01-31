FROM php:8.2-fpm-alpine

RUN apk update \
	apk upgrade

RUN apk add \
		$PHPIZE_DEPS \
		git \
		freetype-dev \
		libjpeg-turbo-dev \
		libpng-dev \
	&& docker-php-ext-configure gd --with-jpeg --with-freetype \
	&& docker-php-ext-install gd