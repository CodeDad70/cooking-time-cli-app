class CookingTime::Scraper5
  attr_accessor :name, :difficulty, :time

    def self.recipes
      self.collect_recipes
    end

    def self.collect_recipes
      all_recipes = []
      all_recipes << self.scrape_recipes

      all_recipes
    end

    def self.scrape_recipes
      doc = Nokogiri::HTML(open("Recipes by preparation time - The Cook Book - sofeminine.html"))
      

    end


  end