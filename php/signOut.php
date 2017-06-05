<?php
session_start();
if(! isset($_SESSION['usrename'])) {
    unset($_SESSION['username']);
    session_destroy();
    echo '已退出登录！';
    exit();
}else {
    echo '尚未登录！';
}
?>
