package com.gallup.gethip.model;

import javax.xml.bind.annotation.XmlRootElement;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@XmlRootElement
@DatabaseTable(tableName="offending_tweets")
public class Offending_tweets {
	
	@DatabaseField(id = true, columnName = "twit_id")
	private Integer twit_id;
	
	@DatabaseField(columnName = "text")
	private String text;
	
	@DatabaseField(columnName = "id")
	private Integer id;
	
	public Offending_tweets(){
		
	}

	public Integer getTwit_id() {
		return twit_id;
	}

	public void setTwit_id(Integer id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

}
