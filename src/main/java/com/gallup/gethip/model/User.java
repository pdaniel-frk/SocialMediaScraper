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
	private Integer twitterId;
	
	@DatabaseField(columnName = "db_id")
	private Integer dbId;
	
	public User(){
		
	}

	public Integer getid() {
		return id;
	}

	public void setID(Integer id) {
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

	public String getPassword(){
		return password;
	}

	public void setPassword(String password){
		this.password = password;
	}

	public Integer getTwitterId(){
		return twitterId;
	}
	
	public void setTwitterId(Integer twitterId){
		this.twitterId = twitterId;
	}
	
	public Integer getDbId(){
		return dbId;
	}
	
	public void setDbId(Integer dbId){
		this.dbId = dbId;
	}
}
