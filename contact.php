<?php require "require/head.php"?>
<?php require "require/header.php"?>
        <div id="sectionContact">
            <form action="send/formContact.php" method="POST">
                <div>
                    <label for="firstname">Firstname</label>
                    <input type="text" id="firstname" name="firstname" required>
                </div>
                <div>
                    <label for="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname" required>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" required>
                </div>
                <div>
                    <label for="about">Talk about</label>
                    <input type="text" id="about" name="about" required>
                </div>
                <!-- <div>
                    <label for="document">Document</label>
                    <input type="file" name="document" id="document">
                </div> -->
                <button type="submit" class="bouton weight">Send</button>
            </form>
        </div>
    </main>
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <script src="javascript/script.js"></script>
    <script src="javascript/form.js"></script>
</body>
</html>