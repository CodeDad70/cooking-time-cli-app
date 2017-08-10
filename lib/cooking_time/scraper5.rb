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
      doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,5.html"))
      recipe = self.new
      binding.pry

      recipe
      

    end


  end


  # name = doc.search("a.br_textepetit").first.text