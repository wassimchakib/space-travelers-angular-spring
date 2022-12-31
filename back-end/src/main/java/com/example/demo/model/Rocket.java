package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Rocket {
  @Id
  private float id;
  private boolean active;
  private float stages;
  private float boosters;
  private float cost_per_launch;
  private float success_rate_pct;
  private String first_flight;
  private String country;
  private String company;
  @OneToOne
  private Measure height;
  @OneToOne
  private Measure diameter;
  @OneToOne
  private Weight mass;
  @ManyToOne
  private Payload payload_weights;
  @OneToOne
  private First_stage first_Stage;
  @OneToOne
  private Second_stage second_stage;
  @OneToOne
  private Engines engines;
  @OneToOne
  private LandingLegs landing_legs;
  private String[] flickr_images;
  private String wikipedia;
  private String description;
  private String rocket_id;
  private String rocket_name;
  private String rocket_type;
}
