package com.gallup.gethip.model;

import javax.xml.bind.annotation.XmlRootElement;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@XmlRootElement
@DatabaseTable(tableName="kids")
public class Kid {
	
	@DatabaseField(id = true, columnName = "twit_id")
	private Integer twitter_id;
	
	@DatabaseField(columnName = "severity")
	private Integer severity;
	
	@DatabaseField(columnName = "offending_tweets")
	private Integer offending_tweets;

	public Kid(){
		
	}

	public int getTwit_id() {
		return twitter_id;
	}

	public void setTwit_id(int twitterId) {
		this.twitter_id = twitterId;
	}

	public int getSevertiy() {
		return this.severity;
	}

	public void setSeverity(int severity) {
		this.severity = severity;
	}

	public int getOffendingTweets() {
		return offending_tweets;
	}

	public void setOffendingTweets(int tweets){
		this.offending_tweets = tweets;
	}
	}
