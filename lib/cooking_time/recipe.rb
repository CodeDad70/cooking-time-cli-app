class CookingTime::Recipe
  attr_accessor :list_name, :list_url, :name, :type, :prep_time, :ingredients, :instructions

  @@all_recipes =[]

  def save 
    @@all_recipes << self
  end

  def self.all
    @@all_recipes
  end

  def self.clear_all
    @@all_recipes.clear
  end

end