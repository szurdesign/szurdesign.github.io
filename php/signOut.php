<?php
if(isset($_SESSION['usrename'])) {
    unset($_SESSION['username']);
    session_destroy();
    echo "<script>alert('已退出登录！');location.href='http://www.szurdesign.com'</script>";
}else {
    echo "<script>alert('尚未登录！');location.href='http://www.szurdesign.com'</script>";
}
?>
