
package com.gallup.gethip.resources;

import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.gallup.gethip.DataSourceManager;
import com.j256.ormlite.dao.Dao;
import com.gallup.gethip.model.*;

@Path("/kids")
public class KidsResource {
    
    // The Java method will process HTTP GET requests
    @GET 
    // type "text/plain"
    @Produces("application/json")
    public Kid getKid(@QueryParam("twit_id") String id) {
    	Kid kid = null;
    	try{	
    		kid = getDao().queryForId(id);
    		if(kid == null){
    			// throw error message
    		}else{
    			return kid;
    		}
    	} catch (SQLException e) {
    		e.printStackTrace();
    		// throw error message
    	}
    	return kid;
    }
    
    @POST
    @Consumes("application/json")
    @Produces("application/json")
    public Kid createKid(Kid kid){
    	try{
    		Kid kidPrime = getDao().createIfNotExists(kid);
    		if(kidPrime == null){
    			//error
    		}else{
    			return kidPrime;
    		}
    	}catch(SQLException e){
    		e.printStackTrace();
    	}
    	return null;
    }
    
    @PUT
    @Consumes ("application/json")
    @Produces ("text/plain")
    public boolean updateKid(Kid kid){
    	int updateKid;
		try {
			updateKid = getDao().update(kid);
			if(updateKid == 1){
	    		return true;
	    	}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		return false;
    }
    private Dao<Kid, String> getDao(){
    	Dao<Kid, String> dao = DataSourceManager.getInstance().getDao(Kid.class);
    	return dao;
    }
}
