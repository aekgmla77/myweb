<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>

<body>
    <% <!--< 표시 안에 들어간 건 자바 --> -->
         String userSex = request.getParameter("sex");
         String userYear = request.getParameter("year");
         String[] userSub = request.getParameterValues("subject");
    %>
    <h1> 성별 : <%=userSex%></h1>
    <h1> 학년 : <%=userYear%></h1>
    <% 
        for(String user : userSub){
    %>
    <h1> 학습 주제: <%=user%></h1>
    <%         
        }
    %>

</body>

</html>