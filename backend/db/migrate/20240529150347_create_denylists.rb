class CreateDenylists < ActiveRecord::Migration[7.1]
  def change
    create_table :denylists do |t|
      t.string :jti, null: false
      t.string :exp, null: false

      t.timestamps
    end

    add_index :denylists, :jti, unique: true
  end
end
