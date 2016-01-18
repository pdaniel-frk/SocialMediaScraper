package com.gallup.gethip.model;

import javax.xml.bind.annotation.XmlRootElement;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@XmlRootElement
@DatabaseTable(tableName="words")
public class Words {
	
	@DatabaseField(generatedId = true, columnName = "id")
	private Integer id;

	@DatabaseField(columnName = "word")
	private String word;
	
	@DatabaseField(columnName = "severity")
	private String severity;
	
	@DatabaseField(columnName = "db_id")
	private Integer dbId;
	
	public Words(){
		
	}

	public Integer getId(){
		return id;
	}

	public void setId(Integer id){
		this.id = id;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public String getSeverity() {
		return severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	public Integer getDbId() {
		return dbId;
	}

	public void setDbId(Integer dbId) {
		this.dbId = dbId;
	}

}
