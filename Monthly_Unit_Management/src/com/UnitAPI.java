package com;
import model.Unit;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/UnitAPI")
public class UnitAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	 Unit UnitObj = new Unit(); 

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String output = UnitObj.insertUnit(request.getParameter("uAccNo"), 
				 request.getParameter("uDate"), 
				request.getParameter("UnitAmount"), 
				request.getParameter("PriceForPerUnit"),
		        request.getParameter("Total")); 
				response.getWriter().write(output); 
	}

	// Convert request parameters to a Map
	private static Map<String, String> getParasMap(HttpServletRequest request) 
	{ 
	 Map<String, String> map = new HashMap<String, String>(); 
	try
	 { 
	 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
	 String queryString = scanner.hasNext() ? 
	 scanner.useDelimiter("\\A").next() : ""; 
	 scanner.close(); 
	 String[] params = queryString.split("&"); 
	 for (String param : params) 
	 { 

	 String[] p = param.split("="); 
	 map.put(p[0], p[1]); 
	 } 
	 } 
	catch (Exception e) 
	 { 
	 } 
	return map; 
	}
	
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request); 
		String output = UnitObj.updateUnit(paras.get("hidItemIDSave").toString(), 
		paras.get("uAccNo").toString(), 
		paras.get("uDate").toString(), 
		paras.get("UnitAmount").toString(), 
		paras.get("PriceForPerUnit").toString(),
		paras.get("Total").toString()); 
		response.getWriter().write(output); 
	}


	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<?, ?> paras = getParasMap(request); 
		 String output = UnitObj.deleteUnit(paras.get("uID").toString()); 
		response.getWriter().write(output); 
	}

}
