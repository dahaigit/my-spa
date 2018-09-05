<?php
namespace EcareYu\Services;

interface Code
{
    const R_OK = 0;

    const E_USERNAME_REQUIRED = 1;
    const E_USERNAME_MAX = 2;
    const E_EMAIL_REQUIRED = 3;
    const E_EMAIL_UNIQUE = 4;
    const E_PASSWORD_REQUIRED = 5;
    const E_PASSWORD_MIN = 6;

    const E_AUTH_ERROR = 7;
    const E_NOT_ACTIVE = 8;

}
