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
@Path("/words")
public class WordsResource {

    @GET 
    @Produces("application/json")
    public Words getWord(@QueryParam("id") String id) {
    	Words word = null;
    	try {
			word = getDao().queryForId(id);
			if(word == null){
				// throw error message
			}else{
				return word;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			// throw error message
		}
        return word;
    }
    
    private Dao<Words, String> getDao(){
    	Dao<Words, String> dao = DataSourceManager.getInstance().getDao(Words.class);
    	return dao;
    }
}