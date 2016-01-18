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

	@DatabaseField(columnName = "last_processed")
	private Long last_processed;

	public Kid(){
		
	}

	public int getTwitId() {
		return twitter_id;
	}

	public void setTwitId(int twitterId) {
		this.twitter_id = twitterId;
	}

	public Integer getSeverity() {
		return severity;
	}

	public void setSeverity(Integer severity) {
		this.severity = severity;
	}

	public int getOffendingTweets() {
		return offending_tweets;
	}

	public void setOffendingTweets(int offending_tweets){
		this.offending_tweets = offending_tweets;
	}

	public Long getLastProcessed(){
		return last_processed;
	}

	public void setLastProcessed(Long last_processed){
		this.last_processed = last_processed;
	}
}