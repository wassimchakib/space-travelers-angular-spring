package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Engines {
  @Id
  private String id;
  private Integer number;
  private String type;
  private String version;
  private String layout;
  @OneToOne
  private Isp isp;
  private Integer engine_loss_max;
  private String propellant_1;
  private String propellant_2;
  @OneToOne
  private Thrust thrust_sea_level;
  @OneToOne
  private Thrust thrust_vacuum;
  private Integer thrust_to_weight;

}
