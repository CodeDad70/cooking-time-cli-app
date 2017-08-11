class CookingTime::Scraper
  attr_accessor :name, :url

    @all_recipes = []

    def self.recipes

      self.scrape_recipes
    end

    def self.scrape_recipes
      recipe = self.new
      
      doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,5.html")) 
      doc.css("td.af_baseS").each do |recipe_list|
        recipe.name = recipe_list.search("a.br_textepetit").text
        recipe.url = recipe_list.search("a").attr("href").text
        recipe
      end
    end
  
  end

  # doc.css("div#af_tdContenu td.af_baseS").each do |recipes|
  # name = doc.search("a.br_textepetit").first.text.gsub("Recipe", "")
  # difficulty = doc.search("td.br_textepetit").first.text
  #url = doc.search("td.af_baseS a").attr("href").text


  #-------------------2nd try ----------------

  # url = recipes.search("a").attr("href").text