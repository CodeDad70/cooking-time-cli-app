class CookingTime::Scraper
  
  def self.scrape_recipes(time_select) 
    doc = Nokogiri::HTML(open("http://www.sofeminine.co.uk/world/cuisine/boitearecettes/id__t,#{time_select}.html")) 
    doc.css("td.af_baseS").each do |recipe_list|
      list_recipe = CookingTime::Recipe.new
      list_recipe.list_name = recipe_list.search("a.br_textepetit").text.gsub("Recipe","")
      list_recipe.list_url = recipe_list.search("a").attr("href").text 
      list_recipe.save 
    end     
  end

  def self.scrape_recipe_details(recipe)
      doc = Nokogiri::HTML(open(recipe.list_url)) 
      recipe.type = doc.search("span.recipeType").text
      recipe.prep_time = doc.search("span.preptime").text
      recipe.ingredients = doc.search("span.ingredient").text.gsub("\r", ", ")
      recipe.instructions = doc.search("span.instructions").text.gsub("\r", " ")
  end

end

   