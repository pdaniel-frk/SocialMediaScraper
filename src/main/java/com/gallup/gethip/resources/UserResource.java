package com.gallup.gethip.resources;

import java.sql.SQLException;

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
@Path("/users")
public class UserResource {

    @GET 
    @Produces("application/json")
    public User getUser(@QueryParam("id") String id) {
    	User usr = null;
    	try {
			usr = getDao().queryForId(id);
			if(usr == null){
				// throw error message
			}else{
				return usr;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			// throw error message
		}
        return usr;
    }
    
    @DELETE
    @Produces("text/plain")
    public String deleteUser(@QueryParam("id") String id){
    	try {
			int num = getDao().deleteById(id);
			if(num == 1){
				return "Delete successful";
			}else{
				return "Unable to delete";
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return "Error in sql statement";
		}
    }
    
    @POST
    @Produces("application/json")
    @Consumes("application/json")
    public User createUser(User usr){
    	try {
			User usrPrime = getDao().createIfNotExists(usr);
			if(usrPrime == null){
				// handle error
			}else{
				return usrPrime;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return null;
    }
    
    @PUT
    @Produces("text/plain")
    @Consumes("application/json")
    public String updateUser(User usr){
    	try {
			int num = getDao().update(usr);
			if(num == 1){
				return "Update successful for user " + usr.getid();
			}else{
				return "Could not update " + usr.getid();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Error updating " + usr.getid();
		}
    }
    
    private Dao<User, String> getDao(){
    	Dao<User, String> dao = DataSourceManager.getInstance().getDao(User.class);
    	return dao;
    }
}