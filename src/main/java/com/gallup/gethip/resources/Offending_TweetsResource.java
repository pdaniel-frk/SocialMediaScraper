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

@Path("/offending_tweets")
public class Offending_TweetsResource {

    @GET 
    @Produces("application/json")
    public Offending_tweets getTweets(@QueryParam("twit_id") String id) {
    	Offending_tweets tweets = null;
    	try {
			tweets = getDao().queryForId(id);
			if(tweets == null){
				// throw error message
			}else{
				return tweets;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			// throw error message
		}
        return tweets;
    }
    
    private Dao<Offending_tweets, String> getDao(){
    	Dao<Offending_tweets, String> dao = DataSourceManager.getInstance().getDao(Offending_tweets.class);
    	return dao;
    }
}