class CreateNewsHighlights < ActiveRecord::Migration
  def change
    create_table :news_highlights do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
