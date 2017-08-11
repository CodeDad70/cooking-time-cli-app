class CookingTime::Scraper
  attr_accessor :name, :difficulty, :time

    def self.recipes
      self.collect_recipes
    end

    def self.collect_recipes
      all_recipes = []
      all_recipes << self.scrape_recipes

      all_recipes
    end

    def self.scrape_recipes(time_select)
      # doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,#{time_select}.html"))
      recipe = self.new
      puts "here are your recipes that are #{time_select} long"
      # binding.pry

      recipe
      

    end


  end


  # name = doc.search("a.br_textepetit").first.text
  # difficulty = doc.search("td.br_textepetit").first.text