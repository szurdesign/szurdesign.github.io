<?php
if(isset($_POST["submit"]) && $_POST["submit"]=="Sign in") {
    // define variations
    $phoneNumber=$_POST["phoneNumber"];
    $password=$_POST["password"];

    // database
    $con=mysql_connect("localhost","bran","liaomelo15@");
    mysql_select_db("szurdesign");
    if(mysqli_connect_errno($con)) {
        // check connection
        echo "<script>alert('Fail to connect to MySQL Database')</script>";
    }
    $sql="SELECT username FROM userInfo WHERE phoneNumber='$phoneNumber' and password='$password'";
    $result=mysql_query($sql) or die(mysql_error());
    $num=mysql_num_rows($result);
    if($num && $num==1) {
        echo "<script>alert('登录成功！');location.href='http://www.szurdesign.com';</script>";
        exit();
    }else {
        echo "<script>alert('登录失败！')</script>";
    }
}else {
    echo "<script>alert('登录失败！')</script>";
}
?>
