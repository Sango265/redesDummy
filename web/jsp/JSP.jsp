<%-- 
    Document   : index
    Created on : 1/09/2013, 03:17:52 PM
    Author     : sango
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="java.util.Date"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP & Servlets</title>
        <style type="text/css">
            <%@ include file="../css/styleJSP.css"%>
        </style>
    </head>
    <body>
        <h1> Java Server Pages </h1>

                <%="Hola Mundo"%>
        <%="<h1>Hola Mundo</h1>"%>
        <% Date date = new Date(); %><%--Se pueden crear objetos--%>
        <%= date %><%--  = se usa para imprimir --%>
        <%-- Comentario JSP--%>
        <!-- Comentario html-->
        <%! String texto = "Hola Mundo String"; %>
        <%= "<br>" + texto %> 

        <p>Counting to three:</p>
        <% for (int i=1; i<4; i++) { %>
        <p>I = <%= i %>.</p>
        <% } %>
        
        
        
        <h1> Servlets </h1>
        
        <form name="inputGet" action="../HolaMundoServlet" method="get" id="myFormGet">
            Name: <input type="text" name="Name"><br>
            Password: <input type="password" name="Password"><br>
            <input type="radio" name="sex" value="male">Male<br>
            <input type="radio" name="sex" value="female">Female<br>
            <input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
            <input type="checkbox" name="vehicle" value="Car">I have a car<br> 
            <input type="submit" value="Enviar Formulario">
        </form>
        <br><br>
        <form name="inputPost" action="../HolaMundoServlet" method="post" id="myFormPost">
            Name: <input type="text" name="Name"><br>
            Password: <input type="password" name="Password"><br>
            <input type="radio" name="sex" value="male">Male<br>
            <input type="radio" name="sex" value="female">Female<br>
            <input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
            <input type="checkbox" name="vehicle" value="Car">I have a car<br> 
            <input type="submit" value="Enviar Formulario">
        </form>
    </body>
</html>
