class CookingTime::Scraper
  attr_accessor :name, :difficulty, :url

    @recipe = []

    def self.recipes
      self.scrape_recipes
    end

    # def self.collect_recipes
    #   all_recipes = []
    #   all_recipes << self.scrape_recipes
    #   all_recipes
    # end

    def self.scrape_recipes
      doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,5.html"))
      doc.each do |recipe|
      @recipe = recipe
      
      recipe.name = doc.search("a.br_textepetit").first.text.gsub("Recipe", "")
      recipe.difficulty = doc.search("td.br_textepetit").first.text
      recipe.url = doc.search("td.af_baseS a").attr("href").text
      
      

      @all_recipes << recipe
      binding.pry
      
    end
    recipe
    end

  end


  # name = doc.search("a.br_textepetit").first.text.gsub("Recipe", "")
  # difficulty = doc.search("td.br_textepetit").first.text
  #url = doc.search("td.af_baseS a").attr("href").text