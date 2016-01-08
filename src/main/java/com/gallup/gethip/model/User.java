package com.gallup.gethip.model;

import javax.xml.bind.annotation.XmlRootElement;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@XmlRootElement
@DatabaseTable(tableName="users")
public class User {
	
	@DatabaseField(generatedId = true, columnName = "id")
	private Integer id;
	
	@DatabaseField(columnName = "first")
	private String first_name;
	
	@DatabaseField(columnName = "last")
	private String last_name;
	
	@DatabaseField(columnName = "email")
	private String email;
	
	@DatabaseField(columnName = "password")
	private String password;
	
	@DatabaseField(columnName = "twit_id")
	private Integer twitter_id;
	
	@DatabaseField(columnName = "db_id")
	private Integer db_id;
	
	public User(){
		
	}

	public int getid() {
		return id;
	}

	public void setID(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return first_name;
	}

	public void setFirstName(String firstName) {
		this.first_name = firstName;
	}

	public String getLastName() {
		return last_name;
	}

	public void setLastName(String lastName) {
		this.last_name = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setTwit_id(Integer Twit){
		this.twitter_id = Twit;
	}

	public Integer getTwit_id(Integer Twit){
		return this.twitter_id;
	}
	
	public Integer getDb_id(Integer db_id){
		return this.db_id;
	}
	
	public void setDb_id(Integer db_id){
		this.db_id = db_id;
	}
}
