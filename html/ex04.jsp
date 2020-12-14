<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>
<body>
    <%
     String userId = request.getParameter("id");
     String userBirth = request.getParameter("birth");
     String userSex = request.getParameter("sex");
     String userMail = request.getParameter("myemail");
     String userEmail = request.getParameter("mail");
     String userPhone = request.getParameter("phone");
     String userNum = request.getParameter("number");
     String userNum1 = request.getParameter("number1");
     String userJob = request.getParameter("jobs");
     String userHb = request.getParameter("Hb");
     String userSelf = request.getParameter("self");
    %>
    <h1>아이디 : <%=userId%></h1>
    <h1>생일 : <%=userBirth%></h1>
    <h1>성별 : <%=userSex%></h1>
    <h1>이메일 : <%=userMail%></h1>
    <h1>메일 수신 : <%=userEmail%></h1>
    <h1>핸드폰 : <%=userPhone%>-<%=userNum%>-<%=userNum1%></h1>
    <h1>직업 : <%=userJob%></h1>
    <h1>취미 : <%=userHb%></h1>
    <h1>자기소개 : <%=userSelf%></h1>
</body>
</html>