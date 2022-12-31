package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.ArrayList;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Mission {
  private String mission_name;
  @Id
  private String mission_id;
  private String[] manufacturers;
  private String[] payload_ids;
  private String wikipedia;
  private String website;
  private String twitter;
  private String description;
}
