package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Payload {
  @Id
  private String id;
  private String name;
  @OneToOne
  private Weight weight;
}
