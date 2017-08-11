class CookingTime::Scraper
  attr_accessor :name, :difficulty, :url

    

    def self.recipes
      self.scrape_recipes
    end

    # def self.collect_recipes
    #   all_recipes = []
    #   all_recipes << self.scrape_recipes
    #   all_recipes
    # end

    def self.scrape_recipes
      recipes =[]
      doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,5.html")) 
      doc.search("td.af_baseS").each do |recipes|
      
      recipe_name = doc.search("a.br_textepetit").first.text.gsub("Recipe", "")
      recipe_difficulty = doc.search("td.br_textepetit").first.text
      recipe_url = doc.search("td.af_baseS a").attr("href").text
      
      recipes << {name: recipe_name, difficulty: recipe_difficulty, url: recipe_url}
      
      end
      recipes
      binding.pry
    end

  end


  # name = doc.search("a.br_textepetit").first.text.gsub("Recipe", "")
  # difficulty = doc.search("td.br_textepetit").first.text
  #url = doc.search("td.af_baseS a").attr("href").text