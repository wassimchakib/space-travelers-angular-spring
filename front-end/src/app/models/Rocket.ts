export interface Rocket{
  rocket_id: string;
  rocket_name: string;
  description: string;
  wikipedia: string;
  flickr_images: string[];
  [others: string]: any;
}