import requests
import tkinter as tk
import tkinter.scrolledtext as scrolledtext
import tkinter.messagebox as messagebox
import tkinter.ttk as ttk
import tkinter.constants as constants

def copy_to_clipboard(text):
    root.clipboard_clear()
    root.clipboard_append(text)
    messagebox.showinfo("Copy to Clipboard", "The link has been copied to the clipboard.")

def search_pokemon_card_images(name):
    url = f"https://api.pokemontcg.io/v2/cards?q=name:{name}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        cards = data.get("data", [])

        if cards:
            return cards
        else:
            return None
    else:
        return None

def show_card_images():
    pokemon_name = entry.get()
    cards = search_pokemon_card_images(pokemon_name)

    if cards is None:
        messagebox.showinfo("No Result", "No Pokémon card found with the specified name.")
        return

    card_count = len(cards)

    window = tk.Toplevel(root)
    window.title("Pokémon Card Images")
    window.geometry("600x400")

    frame = ttk.Frame(window)
    frame.pack(fill=constants.BOTH, expand=True)

    canvas = tk.Canvas(frame)
    canvas.pack(side=constants.LEFT, fill=constants.BOTH, expand=True)

    scrollbar = ttk.Scrollbar(frame, orient=constants.VERTICAL, command=canvas.yview)
    scrollbar.pack(side=constants.RIGHT, fill=constants.Y)

    canvas.configure(yscrollcommand=scrollbar.set)
    canvas.bind("<Configure>", lambda e: canvas.configure(scrollregion=canvas.bbox("all")))
    canvas.bind_all("<MouseWheel>", lambda event: canvas.yview_scroll(int(-1 * (event.delta / 120)), "units"))

    inner_frame = ttk.Frame(canvas)
    canvas.create_window((0, 0), window=inner_frame, anchor=constants.NW)

    for i, card in enumerate(cards):
        image_url = card.get("images", {}).get("small")
        card_name = card.get("name")
        card_link = card.get("images", {}).get("large")

        if image_url:
            response = requests.get(image_url)
            image_data = response.content
            image = tk.PhotoImage(data=image_data)

            label = ttk.Label(inner_frame, image=image)
            label.image = image
            label.grid(row=i, column=0, padx=10, pady=10)

            link_entry = ttk.Entry(inner_frame, width=50, justify=constants.CENTER)
            link_entry.insert(0, card_link)
            link_entry.grid(row=i, column=1, padx=10, pady=10)

            copy_button = ttk.Button(inner_frame, text="Copy Link", command=lambda link=card_link: copy_to_clipboard(link))
            copy_button.grid(row=i, column=2, padx=10, pady=10)

    canvas.update_idletasks()
    canvas.configure(scrollregion=canvas.bbox("all"))

# Create the main window
root = tk.Tk()
root.title("Pokémon Card Search")
root.geometry("400x200")

# Create a label and an entry for searching
label = ttk.Label(root, text="Enter the name of the Pokémon card:")
label.pack(pady=10)

entry = ttk.Entry(root)
entry.pack(pady=10)

# Create a button for searching
search_button = ttk.Button(root, text="Search", command=show_card_images)
search_button.pack(pady=10)

# Run the main event loop
root.mainloop()
